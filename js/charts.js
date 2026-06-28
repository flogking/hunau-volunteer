/**
 * 湖南农业大学高考志愿填报助手 - ECharts图表模块
 */

var Charts = (function() {

  var chartInstances = [];

  function getThemeColors() {
    return {
      accent: '#FF5722',
      accent2: '#2196F3',
      accent3: '#009688',
      ink: '#333333',
      muted: '#666666',
      rule: '#E0E0E0',
      bg2: '#FFFFFF'
    };
  }

  function disposeAll() {
    chartInstances.forEach(function(c) {
      if (c && !c.isDisposed()) c.dispose();
    });
    chartInstances = [];
  }

  /**
   * 位次分布散点图 - 显示所有专业的最低录取位次，标注考生位置
   */
  function renderRankScatter(containerId, majors, userRank, category, referenceYear) {
    var year = referenceYear || 2025;
    var c = getThemeColors();
    var el = document.getElementById(containerId);
    if (!el) return;

    var filtered = majors.filter(function(m) {
      return m.category === category && m.admissionData[year] && m.admissionData[year].minRank;
    });
    filtered.sort(function(a, b) {
      return a.admissionData[year].minRank - b.admissionData[year].minRank;
    });

    if (filtered.length === 0) {
      el.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#999;">暂无该年份的位次数据</div>';
      return;
    }

    var chart = echarts.init(el);
    chartInstances.push(chart);

    var xData = filtered.map(function(m) { return m.name; });
    var yData = filtered.map(function(m) { return m.admissionData[year].minRank; });

    var markLineY = userRank;

    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        formatter: function(params) {
          var p = params[0];
          var major = filtered[p.dataIndex];
          return '<strong>' + major.name + '</strong><br/>' +
                 '最低位次: ' + major.admissionData[year].minRank.toLocaleString() + '<br/>' +
                 '最低分: ' + major.admissionData[year].minScore + '分';
        }
      },
      grid: { top: 40, right: 30, bottom: 80, left: 80 },
      xAxis: {
        type: 'category',
        data: xData,
        axisLabel: { rotate: 45, fontSize: 10, color: c.muted },
        axisLine: { lineStyle: { color: c.rule } }
      },
      yAxis: {
        type: 'value',
        name: '最低录取位次',
        inverse: true,
        nameTextStyle: { color: c.muted },
        axisLabel: { color: c.muted, formatter: function(v) { return v.toLocaleString(); } },
        axisLine: { lineStyle: { color: c.rule } },
        splitLine: { lineStyle: { color: c.rule, type: 'dashed' } }
      },
      series: [{
        type: 'scatter',
        data: yData,
        symbolSize: 12,
        itemStyle: {
          color: function(params) {
            var rank = yData[params.dataIndex];
            var ratio = userRank / rank;
            if (ratio < 0.95) return c.accent;
            if (ratio <= 1.15) return c.accent2;
            return c.accent3;
          }
        },
        markLine: {
          silent: true,
          symbol: 'none',
          lineStyle: { color: c.ink, type: 'dashed', width: 2 },
          label: { formatter: '您的位次: {c}', position: 'end' },
          data: [{ yAxis: markLineY }]
        }
      }]
    });

    window.addEventListener('resize', function() { chart.resize(); });
  }

  /**
   * 冲稳保饼图 - 三档专业数量占比
   */
  function renderStrategyPie(containerId, result) {
    var c = getThemeColors();
    var el = document.getElementById(containerId);
    if (!el) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);

    var data = [
      { value: result.chong.length, name: '冲一冲', itemStyle: { color: c.accent } },
      { value: result.wen.length, name: '稳一稳', itemStyle: { color: c.accent2 } },
      { value: result.bao.length, name: '保一保', itemStyle: { color: c.accent3 } }
    ];

    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'item',
        appendToBody: true,
        formatter: '{b}: {c}个专业 ({d}%)'
      },
      legend: {
        bottom: 0,
        textStyle: { color: c.muted }
      },
      series: [{
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['50%', '45%'],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: '{b}\n{c}个',
          color: c.ink
        },
        labelLine: { lineStyle: { color: c.rule } },
        data: data
      }]
    });

    window.addEventListener('resize', function() { chart.resize(); });
  }

  /**
   * 分数段柱状图 - 各专业录取分数区间
   */
  function renderScoreBar(containerId, majors, category, referenceYear) {
    var year = referenceYear || 2025;
    var c = getThemeColors();
    var el = document.getElementById(containerId);
    if (!el) return;

    var filtered = majors.filter(function(m) {
      return m.category === category && m.admissionData[year] && m.admissionData[year].minScore;
    });
    filtered.sort(function(a, b) {
      return b.admissionData[year].minScore - a.admissionData[year].minScore;
    });

    if (filtered.length === 0) {
      el.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#999;">暂无该年份的分数数据</div>';
      return;
    }

    var chart = echarts.init(el);
    chartInstances.push(chart);

    var xData = filtered.map(function(m) { return m.name; });
    var minScores = filtered.map(function(m) { return m.admissionData[year].minScore; });
    var avgScores = filtered.map(function(m) { return m.admissionData[year].avgScore; });
    var maxScores = filtered.map(function(m) { return m.admissionData[year].maxScore; });

    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: ['最低分', '平均分', '最高分'],
        textStyle: { color: c.muted }
      },
      grid: { top: 50, right: 20, bottom: 80, left: 60 },
      xAxis: {
        type: 'category',
        data: xData,
        axisLabel: { rotate: 45, fontSize: 10, color: c.muted },
        axisLine: { lineStyle: { color: c.rule } }
      },
      yAxis: {
        type: 'value',
        name: '分数',
        min: function(value) { return Math.floor(value.min / 10) * 10 - 10; },
        nameTextStyle: { color: c.muted },
        axisLabel: { color: c.muted },
        axisLine: { lineStyle: { color: c.rule } },
        splitLine: { lineStyle: { color: c.rule, type: 'dashed' } }
      },
      series: [
        {
          name: '最低分',
          type: 'bar',
          data: minScores,
          itemStyle: { color: c.accent3 + 'aa' },
          barGap: '0%'
        },
        {
          name: '平均分',
          type: 'bar',
          data: avgScores,
          itemStyle: { color: c.accent2 + 'aa' }
        },
        {
          name: '最高分',
          type: 'bar',
          data: maxScores,
          itemStyle: { color: c.accent + 'aa' }
        }
      ]
    });

    window.addEventListener('resize', function() { chart.resize(); });
  }

  return {
    renderRankScatter: renderRankScatter,
    renderStrategyPie: renderStrategyPie,
    renderScoreBar: renderScoreBar,
    disposeAll: disposeAll
  };
})();
