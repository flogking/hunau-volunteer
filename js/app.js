/**
 * 湖南农业大学高考志愿填报助手 - 应用主逻辑
 */

(function() {
  var currentData = null;
  var currentResult = null;
  var currentInput = null;

  document.addEventListener('DOMContentLoaded', function() {
    initData();
    loadScoreRank();
    bindEvents();
    updateDataSourceInfo();
  });

  function loadScoreRank() {
    if (typeof ScoreRankTable !== 'undefined') {
      window.ScoreRankTable = ScoreRankTable;
      console.log('一分一段表加载成功（内联数据）');
      autoLookupRank();
    } else {
      console.warn('一分一段表数据未找到');
      // 降级：尝试从 data.js 中查找（如果内联在那里）
      if (typeof window.ScoreRankTable !== 'undefined') {
        autoLookupRank();
      }
    }
  }

  function initData() {
    currentData = DataImporter.getCurrentData(DefaultAdmissionData);
  }

  function bindEvents() {
    // 表单提交
    var form = document.getElementById('analysisForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleAnalyze();
      });
    }

    // 分数输入自动查位次
    var scoreInput = document.getElementById('inputScore');
    if (scoreInput) {
      scoreInput.addEventListener('input', function() {
        autoLookupRank();
      });
      scoreInput.addEventListener('change', function() {
        autoLookupRank();
      });
      scoreInput.addEventListener('blur', function() {
        autoLookupRank();
      });
      scoreInput.addEventListener('keyup', function() {
        autoLookupRank();
      });
    }

    // 科类切换时重新查位次
    var categoryRadios = document.querySelectorAll('input[name="category"]');
    categoryRadios.forEach(function(radio) {
      radio.addEventListener('change', function() {
        autoLookupRank();
      });
    });

    // 数据导入
    var importBtn = document.getElementById('btnImport');
    var fileInput = document.getElementById('fileInput');
    if (importBtn && fileInput) {
      importBtn.addEventListener('click', function() {
        fileInput.click();
      });
      fileInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
          handleImport(e.target.files[0]);
        }
      });
    }

    // 导出模板
    var exportTemplateBtn = document.getElementById('btnExportTemplate');
    if (exportTemplateBtn) {
      exportTemplateBtn.addEventListener('click', function() {
        DataImporter.exportData(DefaultAdmissionData, 'template-data.json');
      });
    }

    // 恢复默认
    var resetBtn = document.getElementById('btnReset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        if (confirm('确定要恢复默认模拟数据吗？您导入的自定义数据将被清除。')) {
          DataImporter.resetToDefault(function() {
            initData();
            updateDataSourceInfo();
            alert('已恢复默认数据');
            location.reload();
          });
        }
      });
    }
  }

  /**
   * 根据分数自动查表填充位次
   */
  function autoLookupRank() {
    var scoreInput = document.getElementById('inputScore');
    var rankInput = document.getElementById('inputRank');
    var hintEl = document.getElementById('rankHint');
    var categoryEl = document.querySelector('input[name="category"]:checked');

    if (!scoreInput || !rankInput || !categoryEl) return;

    var score = parseFloat(scoreInput.value);
    var category = categoryEl.value;

    if (isNaN(score) || score < 100 || score > 750) {
      if (hintEl) hintEl.textContent = '';
      return;
    }

    var rank = lookupRankByScore(score, category);
    if (rank !== null) {
      rankInput.value = rank;
      if (hintEl) {
        hintEl.textContent = '已根据2026年' + category + '一分一段表自动查询：' + score + '分对应位次约 ' + rank.toLocaleString() + ' 名';
      }
    } else {
      if (hintEl) {
        hintEl.textContent = '未在2026年' + category + '一分一段表中找到 ' + score + ' 分的对应数据，请手动输入位次';
      }
    }
  }

  /**
   * 查表函数：根据分数和科类查找位次
   */
  function lookupRankByScore(score, category) {
    if (!window.ScoreRankTable || !window.ScoreRankTable[category]) {
      return null;
    }

    var table = window.ScoreRankTable[category];
    var closestRank = null;
    var closestDiff = Infinity;

    for (var i = 0; i < table.length; i++) {
      var rowScore = table[i][0];
      var rowRank = table[i][1];
      var diff = Math.abs(score - rowScore);

      if (diff === 0) {
        return Math.round(rowRank);
      }
      if (diff < closestDiff) {
        closestDiff = diff;
        closestRank = rowRank;
      }
    }

    // 如果分数超出表的范围，返回null让用户手动输入
    if (closestDiff > 2) {
      return null;
    }

    return Math.round(closestRank);
  }

  function updateDataSourceInfo() {
    var infoEl = document.getElementById('dataSourceInfo');
    if (infoEl) {
      if (DataImporter.isUsingImportedData()) {
        infoEl.textContent = '当前数据：用户导入的自定义数据（参考年份 ' + (currentData.referenceYear || 2025) + '）';
      } else {
        infoEl.textContent = '当前数据：官方录取数据（参考年份 ' + (currentData.referenceYear || 2025) + '）';
      }
    }
  }

  function handleImport(file) {
    DataImporter.importData(file, function(data) {
      currentData = data;
      updateDataSourceInfo();
      alert('数据导入成功！共加载 ' + data.majors.length + ' 个专业。');
      // 如果已有分析结果，重新分析
      if (currentInput) {
        runAnalysis(currentInput.score, currentInput.rank, currentInput.category, currentInput.year, currentInput.specialPlan || '');
      }
    }, function(err) {
      alert('导入失败：' + err);
    });
  }

  function handleAnalyze() {
    var score = document.getElementById('inputScore').value.trim();
    var rank = document.getElementById('inputRank').value.trim();
    var categoryEl = document.querySelector('input[name="category"]:checked');
    var category = categoryEl ? categoryEl.value : '';
    var year = parseInt(document.getElementById('inputYear').value) || currentData.referenceYear;

    // 获取专项计划选择
    var specialPlan = '';
    if (document.getElementById('checkGuojia').checked && document.getElementById('checkDifang').checked) {
      specialPlan = ''; // 都不选或都选时用普通批（专项只能选一个）
      alert('国家专项和地方专项不能同时选择，请只勾选其中一个。');
      return;
    } else if (document.getElementById('checkGuojia').checked) {
      specialPlan = '国家专项';
    } else if (document.getElementById('checkDifang').checked) {
      specialPlan = '地方专项';
    }

    var errors = Algorithm.validateInput(score, rank, category);
    if (errors.length > 0) {
      alert('输入有误：\n' + errors.join('\n'));
      return;
    }

    currentInput = {
      score: parseFloat(score),
      rank: parseInt(rank),
      category: category,
      year: year,
      specialPlan: specialPlan
    };

    runAnalysis(currentInput.score, currentInput.rank, currentInput.category, currentInput.year, currentInput.specialPlan);
  }

  function runAnalysis(score, rank, category, year, specialPlan) {
    if (!currentData || !currentData.majors) {
      alert('数据未加载');
      return;
    }

    var result = Algorithm.classifyMajors(currentData.majors, rank, category, year, specialPlan);
    currentResult = result;

    // 渲染各模块
    renderOverview(score, rank, category, result, specialPlan);
    renderStrategySection('chongSection', 'chongMajors', result.chong, 'chong');
    renderStrategySection('wenSection', 'wenMajors', result.wen, 'wen');
    renderStrategySection('baoSection', 'baoMajors', result.bao, 'bao');
    renderCharts(result, rank, category, year);
    renderAdvice(result, rank, category, specialPlan);

    // 显示结果区域
    document.getElementById('resultArea').classList.remove('hidden');

    // 平滑滚动到结果
    document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderOverview(score, rank, category, result, specialPlan) {
    var total = result.chong.length + result.wen.length + result.bao.length;
    document.getElementById('ovScore').textContent = score;
    document.getElementById('ovRank').textContent = rank.toLocaleString();
    document.getElementById('ovCategory').textContent = category + (specialPlan ? '（' + specialPlan + '）' : '');
    document.getElementById('ovTotal').textContent = total;
  }

  function renderStrategySection(sectionId, containerId, majors, type) {
    var section = document.getElementById(sectionId);
    var container = document.getElementById(containerId);
    if (!section || !container) return;

    if (majors.length === 0) {
      section.classList.add('hidden');
      return;
    }
    section.classList.remove('hidden');

    var countEl = section.querySelector('.count');
    if (countEl) {
      countEl.textContent = '共 ' + majors.length + ' 个专业';
    }

    var html = '';
    majors.forEach(function(m) {
      var tagsHtml = '';
      if (m.isNationalFirstClass) {
        tagsHtml += '<span class="tag tag-first">国家一流</span>';
      }
      if (m.isCharacteristic) {
        tagsHtml += '<span class="tag tag-feature">国家特色</span>';
      }
      m.tags.forEach(function(tag) {
        if (tag === '王牌专业' || tag === '全国顶尖') {
          tagsHtml += '<span class="tag tag-star">' + tag + '</span>';
        }
      });

      var probPercent = Math.round(m.probability.value * 100);
      var diffText = m.rankDiff > 0 ? '+' + m.rankDiff.toLocaleString() : m.rankDiff.toLocaleString();
      var diffClass = m.rankDiff > 0 ? 'negative' : 'positive';

      html += '<div class="major-card ' + type + '">';
      html += '  <div class="major-card-header">';
      html += '    <div class="major-name">' + m.name + '</div>';
      html += '    <div class="major-tags">' + tagsHtml + '</div>';
      html += '  </div>';
      html += '  <div class="major-stats">';
      html += '    <div class="stat"><div class="stat-value">' + m.referenceData.minScore + '分</div><div class="stat-label">去年最低分</div></div>';
      html += '    <div class="stat"><div class="stat-value">' + m.referenceData.minRank.toLocaleString() + '</div><div class="stat-label">去年最低位次</div></div>';
      html += '    <div class="stat"><div class="stat-value">' + diffText + '</div><div class="stat-label">位次差值</div></div>';
      html += '    <div class="stat"><div class="stat-value">' + m.referenceData.planCount + '人</div><div class="stat-label">招生计划</div></div>';
      html += '  </div>';
      html += '  <div class="probability-bar">';
      html += '    <div class="probability-bar-label"><span>预估录取概率：' + m.probability.level + '</span><span>' + probPercent + '%</span></div>';
      html += '    <div class="probability-bar-track"><div class="probability-bar-fill fill-' + type + '" style="width:' + probPercent + '%"></div></div>';
      html += '  </div>';
      html += '</div>';
    });

    container.innerHTML = html;
  }

  function renderCharts(result, rank, category, year) {
    Charts.disposeAll();

    var chartSection = document.getElementById('chartsSection');
    if (chartSection) {
      chartSection.classList.remove('hidden');
    }

    // 位次散点图
    setTimeout(function() {
      Charts.renderRankScatter('chartRankScatter', currentData.majors, rank, category, year);
    }, 300);

    // 冲稳保饼图
    setTimeout(function() {
      Charts.renderStrategyPie('chartStrategyPie', result);
    }, 400);

    // 分数段柱状图
    setTimeout(function() {
      Charts.renderScoreBar('chartScoreBar', currentData.majors, category, year);
    }, 500);
  }

  function renderAdvice(result, rank, category, specialPlan) {
    var section = document.getElementById('adviceSection');
    var content = document.getElementById('adviceContent');
    if (!section || !content) return;

    section.classList.remove('hidden');

    var adviceLines = Algorithm.generateAdvice(result, rank, category, specialPlan);
    var html = '';
    adviceLines.forEach(function(line) {
      if (line.startsWith('⚠️')) {
        html += '<div class="warning-box">' + line + '</div>';
      } else if (line.startsWith('【')) {
        html += '<p><strong class="highlight">' + line + '</strong></p>';
      } else if (line === '') {
        // skip
      } else {
        html += '<p>' + line + '</p>';
      }
    });
    content.innerHTML = html;
  }

})();
