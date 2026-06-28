/**
 * 湖南农业大学高考志愿填报助手 - 数据导入模块
 */

var DataImporter = (function() {

  var STORAGE_KEY = 'hunanau_gaokao_data';

  /**
   * 获取当前使用的数据（优先从localStorage读取用户导入的数据）
   */
  function getCurrentData(defaultData) {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        var parsed = JSON.parse(stored);
        if (validateDataStructure(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('读取本地数据失败', e);
    }
    return defaultData;
  }

  /**
   * 导入数据文件
   */
  function importData(file, onSuccess, onError) {
    if (!file) {
      onError && onError('未选择文件');
      return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var data = JSON.parse(e.target.result);
        var errors = validateDataStructure(data);
        if (errors.length === 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          onSuccess && onSuccess(data);
        } else {
          onError && onError('数据格式不正确：' + errors.join('；'));
        }
      } catch (err) {
        onError && onError('文件解析失败，请确保上传的是有效的JSON文件');
      }
    };
    reader.onerror = function() {
      onError && onError('文件读取失败');
    };
    reader.readAsText(file);
  }

  /**
   * 校验数据结构
   */
  function validateDataStructure(data) {
    var errors = [];
    if (!data) {
      errors.push('数据为空');
      return errors;
    }
    if (!data.university || typeof data.university !== 'object') {
      errors.push('缺少 university 字段');
    }
    if (!data.referenceYear || typeof data.referenceYear !== 'number') {
      errors.push('缺少 referenceYear 字段或类型不正确');
    }
    if (!Array.isArray(data.majors)) {
      errors.push('缺少 majors 数组');
    } else {
      if (data.majors.length === 0) {
        errors.push('majors 数组为空');
      }
      for (var i = 0; i < Math.min(5, data.majors.length); i++) {
        var m = data.majors[i];
        if (!m.name) errors.push('第 ' + (i+1) + ' 个专业缺少 name');
        if (!m.category) errors.push('第 ' + (i+1) + ' 个专业缺少 category');
        if (!m.admissionData || typeof m.admissionData !== 'object') {
          errors.push('第 ' + (i+1) + ' 个专业缺少 admissionData');
        }
      }
    }
    return errors;
  }

  /**
   * 恢复默认数据（清除localStorage中的用户数据）
   */
  function resetToDefault(onSuccess) {
    localStorage.removeItem(STORAGE_KEY);
    onSuccess && onSuccess();
  }

  /**
   * 导出当前数据为JSON文件
   */
  function exportData(data, filename) {
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename || 'hunanau-admission-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * 检查当前是否使用用户导入的数据
   */
  function isUsingImportedData() {
    try {
      return localStorage.getItem(STORAGE_KEY) !== null;
    } catch (e) {
      return false;
    }
  }

  return {
    getCurrentData: getCurrentData,
    importData: importData,
    validateDataStructure: validateDataStructure,
    resetToDefault: resetToDefault,
    exportData: exportData,
    isUsingImportedData: isUsingImportedData
  };
})();
