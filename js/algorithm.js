/**
 * 湖南农业大学高考志愿填报助手 - 核心推荐算法
 */

var Algorithm = (function() {

  /**
   * 根据考生位次与专业最低录取位次的比值进行冲稳保分档
   */
  function classifyMajors(majors, userRank, category, referenceYear, specialPlan) {
    var chong = [];
    var wen = [];
    var bao = [];

    majors.forEach(function(major) {
      if (major.category !== category) return;

      // 优先使用专项计划数据
      var data = null;
      if (specialPlan && major.specialAdmissionData && major.specialAdmissionData[specialPlan]) {
        data = major.specialAdmissionData[specialPlan][referenceYear];
      }
      // 退回到普通录取数据
      if (!data || !data.minRank) {
        data = major.admissionData[referenceYear];
      }
      if (!data || !data.minRank) return;

      var refRank = data.minRank;
      var ratio = userRank / refRank;
      var prob = estimateProbability(ratio);

      var enriched = {};
      for (var key in major) {
        if (major.hasOwnProperty(key)) {
          enriched[key] = major[key];
        }
      }
      enriched.ratio = ratio;
      enriched.probability = prob;
      enriched.rankDiff = userRank - refRank;
      enriched.referenceData = data;
      enriched.usedPlan = specialPlan || '普通批';

      if (ratio < 0.95) {
        bao.push(enriched);
      } else if (ratio <= 1.15) {
        wen.push(enriched);
      } else {
        chong.push(enriched);
      }
    });

    var sortFn = function(a, b) {
      if (b.probability.value !== a.probability.value) {
        return b.probability.value - a.probability.value;
      }
      var aScore = (a.isNationalFirstClass ? 2 : 0) + (a.isCharacteristic ? 1 : 0);
      var bScore = (b.isNationalFirstClass ? 2 : 0) + (b.isCharacteristic ? 1 : 0);
      return bScore - aScore;
    };

    chong.sort(sortFn);
    wen.sort(sortFn);
    bao.sort(sortFn);

    return {
      chong: chong,
      wen: wen,
      bao: bao
    };
  }

  /**
   * 根据位次比值估算录取概率
   */
  function estimateProbability(ratio) {
    if (ratio < 0.7) {
      return { level: "很高", value: 0.92 };
    }
    if (ratio < 0.85) {
      return { level: "高", value: 0.85 };
    }
    if (ratio < 0.95) {
      return { level: "中高", value: 0.75 };
    }
    if (ratio < 1.05) {
      return { level: "中等", value: 0.55 };
    }
    if (ratio < 1.15) {
      return { level: "中下", value: 0.40 };
    }
    if (ratio < 1.3) {
      return { level: "较低", value: 0.25 };
    }
    return { level: "很低", value: 0.15 };
  }

  /**
   * 生成填报策略建议文本
   */
  function generateAdvice(result, userRank, category) {
    var chongCount = result.chong.length;
    var wenCount = result.wen.length;
    var baoCount = result.bao.length;
    var total = chongCount + wenCount + baoCount;

    var advice = [];

    advice.push("根据您的位次（全省第 " + userRank.toLocaleString() + " 名，" + category + "），系统从湖南农业大学 " + total + " 个招生专业中为您筛选出以下推荐：");
    advice.push("");

    if (chongCount > 0) {
      advice.push("【冲一冲】" + chongCount + " 个专业");
      advice.push("这些专业往年最低录取位次高于您的位次（即录取分数要求更高），属于有一定挑战但仍有希望的选择。如果您的分数今年整体偏高，或该专业招生计划增加，则有机会被录取。");
      if (chongCount >= 1 && chongCount <= 3) {
        advice.push("建议从中选择 1-2 个作为前序志愿，搭配更多稳档专业。");
      }
      advice.push("");
    }

    if (wenCount > 0) {
      advice.push("【稳一稳】" + wenCount + " 个专业");
      advice.push("这些专业往年最低录取位次与您的位次较为匹配，是录取概率最高的选择，应作为志愿填报的核心部分。");
      advice.push("建议选择 3-5 个作为中间志愿，确保有较大的录取把握。");
      advice.push("");
    }

    if (baoCount > 0) {
      advice.push("【保一保】" + baoCount + " 个专业");
      advice.push("这些专业往年最低录取位次低于您的位次（即录取分数要求更低），录取概率极高，可作为兜底选择。");
      advice.push("建议选择 1-2 个放在志愿表靠后位置，防止前面志愿全部滑档。");
      advice.push("");
    }

    if (wenCount === 0 && baoCount === 0) {
      advice.push('风险提示：您的位次在所有专业中均处于冲档范围，说明您的分数可能略低于该校多数专业的往年录取水平。建议适当扩大院校选择范围，或在湖南农业大学中选择招生计划较多、冷门程度较高的专业作为保底。');
    } else if (chongCount === 0 && wenCount === 0) {
      advice.push('风险提示：您的位次在所有专业中均处于保档范围，说明您的分数超过该校多数专业的往年录取水平较多。您可以放心填报，同时也可考虑向更高层次院校冲刺。');
    } else if (wenCount < 3) {
      advice.push('提示：您的稳档专业数量较少（仅 ' + wenCount + ' 个），建议适当增加保底志愿，或考虑是否接受冲档专业的调剂。');
    }

    advice.push("");
    advice.push("【志愿排序建议】");
    advice.push("合理的志愿排序应为：冲 → 稳 → 保，即先填录取概率较低但您心仪的专业，再填匹配度高的专业，最后填保底专业。同一档内，建议将更喜欢的专业排在前面。");

    return advice;
  }

  /**
   * 校验用户输入
   */
  function validateInput(score, rank, category) {
    var errors = [];
    if (score === "" || score === null || isNaN(score)) {
      errors.push("请输入有效的分数");
    } else {
      var s = parseFloat(score);
      if (s < 200 || s > 750) errors.push("分数应在 200-750 之间");
    }
    if (rank === "" || rank === null || isNaN(rank)) {
      errors.push("请输入有效的位次");
    } else {
      var r = parseInt(rank);
      if (r < 1 || r > 500000) errors.push("位次应在 1-500000 之间");
    }
    if (!category) {
      errors.push("请选择科类");
    }
    return errors;
  }

  return {
    classifyMajors: classifyMajors,
    estimateProbability: estimateProbability,
    generateAdvice: generateAdvice,
    validateInput: validateInput
  };
})();
