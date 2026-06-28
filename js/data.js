/**
 * 湖南农业大学高考志愿填报助手 - 招生数据
 * 数据来源：湖南农业大学2024-2025年湖南省录取情况
 */
var DefaultAdmissionData = {
  "university": {
    "name": "湖南农业大学",
    "code": "10537",
    "provinceCode": "4305",
    "location": "湖南省长沙市",
    "level": "省属重点/省双一流A类",
    "batch": "本科批"
  },
  "referenceYear": 2025,
  "categories": ["物理类", "历史类"],
  "majors": [
    {
      "id": "P001",
      "name": "中药资源与开发",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 522, "maxScore": 557, "avgScore": 537.9, "minRank": 77996, "planCount": 54 }
      },
      "tags": [],
      "description": "中药材资源调查与开发利用",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 486, "maxScore": 512, "avgScore": 498.8, "minRank": 107082 }
        },
        "地方专项": {
          "2025": { "planCount": 15, "minScore": 498, "maxScore": 514, "avgScore": 503.5, "minRank": 92992 }
        }
      }
    },
    {
      "id": "P002",
      "name": "会计学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 554, "maxScore": 575, "avgScore": 562.0, "minRank": 40000, "planCount": 45 }
      },
      "tags": ["热门专业"],
      "description": "财务会计与审计实务",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 2, "minScore": 531, "maxScore": 532, "avgScore": 531.5, "minRank": 61330 }
        },
        "地方专项": {
          "2025": { "planCount": 3, "minScore": 537, "maxScore": 554, "avgScore": 545.7, "minRank": 55007 }
        }
      }
    },
    {
      "id": "P003",
      "name": "信息与计算科学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 524, "maxScore": 546, "avgScore": 533.0, "minRank": 69000, "planCount": 42 }
      },
      "tags": [],
      "description": "科学计算与数据分析算法",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 12, "minScore": 488, "maxScore": 489, "avgScore": 488.4, "minRank": 104648 }
        },
        "地方专项": {
          "2025": { "planCount": 8, "minScore": 539, "maxScore": 544, "avgScore": 540.9, "minRank": 53361 }
        }
      }
    },
    {
      "id": "P004",
      "name": "农业机械化及其自动化",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 515, "maxScore": 572, "avgScore": 519.8, "minRank": 68497, "planCount": 31 }
      },
      "tags": [],
      "description": "农业装备设计与自动化控制",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 26, "minScore": 514, "maxScore": 535, "avgScore": 521.8, "minRank": 75982 }
        },
        "地方专项": {
          "2025": { "planCount": 28, "minScore": 523, "maxScore": 543, "avgScore": 531.1, "minRank": 67295 }
        }
      }
    },
    {
      "id": "P005",
      "name": "农业资源与环境",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 530, "maxScore": 552, "avgScore": 539.0, "minRank": 63000, "planCount": 40 },
        "2025": { "minScore": 508, "maxScore": 533, "avgScore": 515.5, "minRank": 82015, "planCount": 42 }
      },
      "tags": [],
      "description": "土壤肥料与农业环境保护",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 35, "minScore": 485, "maxScore": 516, "avgScore": 496.7, "minRank": 108253 }
        },
        "地方专项": {
          "2025": { "planCount": 30, "minScore": 498, "maxScore": 526, "avgScore": 507.5, "minRank": 92992 }
        }
      }
    },
    {
      "id": "P006",
      "name": "农学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": true,
      "admissionData": {
        "2024": { "minScore": 538, "maxScore": 565, "avgScore": 548.0, "minRank": 55000, "planCount": 70 }
      },
      "tags": ["王牌专业", "国家特色"],
      "description": "作物栽培与育种，传统优势学科",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 30, "minScore": 518, "maxScore": 557, "avgScore": 528.6, "minRank": 72077 }
        },
        "地方专项": {
          "2025": { "planCount": 30, "minScore": 518, "maxScore": 543, "avgScore": 529.3, "minRank": 72077 }
        }
      }
    },
    {
      "id": "P007",
      "name": "动物医学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "五年",
      "degreeType": "农学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": true,
      "admissionData": {
        "2024": { "minScore": 541, "maxScore": 568, "avgScore": 552.0, "minRank": 52000, "planCount": 60 },
        "2025": { "minScore": 537, "maxScore": 572, "avgScore": 543.4, "minRank": 51303, "planCount": 137 }
      },
      "tags": ["王牌专业", "国家特色"],
      "description": "动物疾病诊疗与兽医公共卫生",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 12, "minScore": 522, "maxScore": 548, "avgScore": 532, "minRank": 66225 }
        },
        "地方专项": {
          "2025": { "planCount": 10, "minScore": 530, "maxScore": 540, "avgScore": 534.8, "minRank": 61016 }
        }
      }
    },
    {
      "id": "P008",
      "name": "动物科学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 513, "maxScore": 550, "avgScore": 518.3, "minRank": 74117, "planCount": 136 }
      },
      "tags": [],
      "description": "",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 42, "minScore": 485, "maxScore": 530, "avgScore": 501, "minRank": 108253 }
        },
        "地方专项": {
          "2025": { "planCount": 40, "minScore": 497, "maxScore": 527, "avgScore": 511, "minRank": 94171 }
        }
      }
    },
    {
      "id": "P009",
      "name": "动物药学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 513, "maxScore": 532, "avgScore": 517.3, "minRank": 74117, "planCount": 13 }
      },
      "tags": [],
      "description": "兽用药物研发与临床应用",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 8, "minScore": 504, "maxScore": 520, "avgScore": 512.1, "minRank": 85449 }
        },
        "地方专项": {
          "2025": { "planCount": 10, "minScore": 509, "maxScore": 529, "avgScore": 518.8, "minRank": 81069 }
        }
      }
    },
    {
      "id": "P010",
      "name": "园林",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 515, "maxScore": 542, "avgScore": 521.1, "minRank": 68497, "planCount": 45 }
      },
      "tags": [],
      "description": "园林规划设计与绿地管理",
      "specialAdmissionData": {}
    },
    {
      "id": "P011",
      "name": "园艺",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": true,
      "admissionData": {
        "2024": { "minScore": 537, "maxScore": 562, "avgScore": 547.0, "minRank": 56000, "planCount": 55 },
        "2025": { "minScore": 508, "maxScore": 558, "avgScore": 515.8, "minRank": 82015, "planCount": 115 }
      },
      "tags": ["王牌专业", "国家特色"],
      "description": "果树蔬菜花卉栽培与景观园艺",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 35, "minScore": 486, "maxScore": 534, "avgScore": 503.2, "minRank": 107082 }
        },
        "地方专项": {
          "2025": { "planCount": 34, "minScore": 502, "maxScore": 540, "avgScore": 511.8, "minRank": 88548 }
        }
      }
    },
    {
      "id": "P012",
      "name": "土地科学与技术",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 506, "maxScore": 525, "avgScore": 514.3, "minRank": 84992, "planCount": 22 }
      },
      "tags": [],
      "description": "土地资源调查与评价技术",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 14, "minScore": 499, "maxScore": 525, "avgScore": 515.3, "minRank": 91840 }
        }
      }
    },
    {
      "id": "P013",
      "name": "土木工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 528, "maxScore": 550, "avgScore": 537.0, "minRank": 65000, "planCount": 75 },
        "2025": { "minScore": 506, "maxScore": 544, "avgScore": 512.9, "minRank": 84992, "planCount": 222 }
      },
      "tags": [],
      "description": "建筑结构设计与工程施工管理",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 488, "maxScore": 513, "avgScore": 500.7, "minRank": 104648 }
        },
        "地方专项": {
          "2025": { "planCount": 14, "minScore": 498, "maxScore": 529, "avgScore": 501.1, "minRank": 92992 }
        }
      }
    },
    {
      "id": "P014",
      "name": "安全工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 537, "maxScore": 555, "avgScore": 542.5, "minRank": 51303, "planCount": 33 }
      },
      "tags": [],
      "description": "安全生产与职业健康防护",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 499, "maxScore": 520, "avgScore": 509.1, "minRank": 91640 }
        },
        "地方专项": {
          "2025": { "planCount": 13, "minScore": 499, "maxScore": 521, "avgScore": 507.8, "minRank": 91840 }
        }
      }
    },
    {
      "id": "P015",
      "name": "工商管理",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 542, "maxScore": 563, "avgScore": 550.0, "minRank": 51000, "planCount": 42 }
      },
      "tags": [],
      "description": "企业运营管理与市场营销",
      "specialAdmissionData": {}
    },
    {
      "id": "P016",
      "name": "应用化学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 526, "maxScore": 548, "avgScore": 535.0, "minRank": 67000, "planCount": 48 },
        "2025": { "minScore": 515, "maxScore": 542, "avgScore": 521.6, "minRank": 68497, "planCount": 56 }
      },
      "tags": [],
      "description": "化学分析与应用技术开发",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 20, "minScore": 504, "maxScore": 525, "avgScore": 513.4, "minRank": 85449 }
        },
        "地方专项": {
          "2025": { "planCount": 20, "minScore": 511, "maxScore": 535, "avgScore": 518.6, "minRank": 78999 }
        }
      }
    },
    {
      "id": "P017",
      "name": "数据科学与大数据技术",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 545, "maxScore": 567, "avgScore": 553.0, "minRank": 48000, "planCount": 55 },
        "2025": { "minScore": 547, "maxScore": 556, "avgScore": 549.5, "minRank": 47999, "planCount": 67 }
      },
      "tags": ["新兴专业"],
      "description": "大数据分析与机器学习应用",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 544, "maxScore": 546, "avgScore": 544.6, "minRank": 49388 }
        }
      }
    },
    {
      "id": "P018",
      "name": "智慧农业",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 512, "maxScore": 541, "avgScore": 517.9, "minRank": 77996, "planCount": 51 }
      },
      "tags": ["新兴专业"],
      "description": "农业物联网与精准农业技术",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 529, "maxScore": 541, "avgScore": 534.8, "minRank": 61880 }
        },
        "地方专项": {
          "2025": { "planCount": 10, "minScore": 522, "maxScore": 562, "avgScore": 528.2, "minRank": 66225 }
        }
      }
    },
    {
      "id": "P019",
      "name": "智能科学与技术",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 547, "maxScore": 558, "avgScore": 549.1, "minRank": 47999, "planCount": 52 }
      },
      "tags": ["新兴专业"],
      "description": "人工智能系统开发与应用",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 540, "maxScore": 548, "avgScore": 543.6, "minRank": 52569 }
        },
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 541, "maxScore": 544, "avgScore": 542.2, "minRank": 51729 }
        }
      }
    },
    {
      "id": "P020",
      "name": "机器人工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 528, "maxScore": 555, "avgScore": 534.9, "minRank": 55300, "planCount": 45 }
      },
      "tags": ["新兴专业"],
      "description": "机器人系统设计与智能控制",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 25, "minScore": 524, "maxScore": 543, "avgScore": 528.7, "minRank": 65377 }
        },
        "地方专项": {
          "2025": { "planCount": 24, "minScore": 533, "maxScore": 545, "avgScore": 536, "minRank": 58342 }
        }
      }
    },
    {
      "id": "P021",
      "name": "机械设计制造及其自动化",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 529, "maxScore": 552, "avgScore": 538.0, "minRank": 64000, "planCount": 70 },
        "2025": { "minScore": 537, "maxScore": 555, "avgScore": 541.3, "minRank": 51303, "planCount": 110 }
      },
      "tags": [],
      "description": "机械系统设计制造与自动化控制",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 536, "maxScore": 544, "avgScore": 538.7, "minRank": 55823 }
        },
        "地方专项": {
          "2025": { "planCount": 7, "minScore": 544, "maxScore": 552, "avgScore": 546.1, "minRank": 49388 }
        }
      }
    },
    {
      "id": "P022",
      "name": "材料化学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 525, "maxScore": 547, "avgScore": 534.0, "minRank": 68000, "planCount": 40 },
        "2025": { "minScore": 513, "maxScore": 537, "avgScore": 519.9, "minRank": 74117, "planCount": 64 }
      },
      "tags": [],
      "description": "新材料研发与性能测试",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 512, "maxScore": 542, "avgScore": 519.9, "minRank": 77998 }
        },
        "地方专项": {
          "2025": { "planCount": 12, "minScore": 516, "maxScore": 535, "avgScore": 522.4, "minRank": 74657 }
        }
      }
    },
    {
      "id": "P023",
      "name": "植物保护",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 536, "maxScore": 560, "avgScore": 545.0, "minRank": 57000, "planCount": 50 },
        "2025": { "minScore": 509, "maxScore": 554, "avgScore": 515.3, "minRank": 80488, "planCount": 52 }
      },
      "tags": ["国家一流"],
      "description": "病虫害防治与生物安全",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 32, "minScore": 485, "maxScore": 536, "avgScore": 506.2, "minRank": 108253 }
        },
        "地方专项": {
          "2025": { "planCount": 33, "minScore": 498, "maxScore": 543, "avgScore": 515.4, "minRank": 92992 }
        }
      }
    },
    {
      "id": "P024",
      "name": "水产养殖学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 518, "maxScore": 540, "avgScore": 526.0, "minRank": 75000, "planCount": 38 },
        "2025": { "minScore": 504, "maxScore": 533, "avgScore": 509.8, "minRank": 95488, "planCount": 38 }
      },
      "tags": [],
      "description": "水产动物繁育与养殖技术",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 35, "minScore": 492, "maxScore": 511, "avgScore": 497.7, "minRank": 99960 }
        },
        "地方专项": {
          "2025": { "planCount": 37, "minScore": 501, "maxScore": 520, "avgScore": 507.8, "minRank": 89625 }
        }
      }
    },
    {
      "id": "P025",
      "name": "水利水电工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 527, "maxScore": 549, "avgScore": 536.0, "minRank": 66000, "planCount": 45 },
        "2025": { "minScore": 517, "maxScore": 544, "avgScore": 521.1, "minRank": 70193, "planCount": 117 }
      },
      "tags": [],
      "description": "水利枢纽设计与水资源管理",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 25, "minScore": 508, "maxScore": 532, "avgScore": 517.3, "minRank": 82093 }
        },
        "地方专项": {
          "2025": { "planCount": 35, "minScore": 508, "maxScore": 534, "avgScore": 519.8, "minRank": 82093 }
        }
      }
    },
    {
      "id": "P026",
      "name": "水族科学与技术",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 504, "maxScore": 525, "avgScore": 509.8, "minRank": 95488, "planCount": 8 }
      },
      "tags": [],
      "description": "观赏水族养殖与水环境调控",
      "specialAdmissionData": {}
    },
    {
      "id": "P027",
      "name": "水生动物医学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 508, "maxScore": 519, "avgScore": 510.9, "minRank": 82015, "planCount": 5 }
      },
      "tags": [],
      "description": "水生动物疾病诊疗与防控",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 12, "minScore": 488, "maxScore": 522, "avgScore": 498, "minRank": 104648 }
        },
        "地方专项": {
          "2025": { "planCount": 12, "minScore": 501, "maxScore": 524, "avgScore": 505.4, "minRank": 89625 }
        }
      }
    },
    {
      "id": "P028",
      "name": "法学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "法学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 556, "maxScore": 578, "avgScore": 564.0, "minRank": 38000, "planCount": 30 }
      },
      "tags": ["热门专业"],
      "description": "法律实务与司法实践",
      "specialAdmissionData": {}
    },
    {
      "id": "P029",
      "name": "物联网工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 546, "maxScore": 568, "avgScore": 554.0, "minRank": 47000, "planCount": 50 }
      },
      "tags": ["新兴专业"],
      "description": "物联网系统架构与智能感知技术",
      "specialAdmissionData": {}
    },
    {
      "id": "P030",
      "name": "环境工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 532, "maxScore": 555, "avgScore": 541.0, "minRank": 61000, "planCount": 50 },
        "2025": { "minScore": 510, "maxScore": 532, "avgScore": 515.2, "minRank": 78929, "planCount": 27 }
      },
      "tags": [],
      "description": "环境污染治理与生态修复技术",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 22, "minScore": 486, "maxScore": 520, "avgScore": 495.2, "minRank": 107082 }
        },
        "地方专项": {
          "2025": { "planCount": 20, "minScore": 497, "maxScore": 543, "avgScore": 510.1, "minRank": 94171 }
        }
      }
    },
    {
      "id": "P031",
      "name": "环境科学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 483, "maxScore": 520, "avgScore": 498.0, "minRank": 110000, "planCount": 55 },
        "2025": { "minScore": 509, "maxScore": 536, "avgScore": 515.3, "minRank": 80488, "planCount": 28 }
      },
      "tags": [],
      "description": "环境监测评价与污染控制",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 490, "maxScore": 507, "avgScore": 498.2, "minRank": 102293 }
        },
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 499, "maxScore": 513, "avgScore": 503.2, "minRank": 91840 }
        }
      }
    },
    {
      "id": "P032",
      "name": "生态学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 520, "maxScore": 542, "avgScore": 528.0, "minRank": 73000, "planCount": 35 }
      },
      "tags": [],
      "description": "生态系统研究与生物多样性保护",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 15, "minScore": 485, "maxScore": 514, "avgScore": 494.3, "minRank": 108253 }
        },
        "地方专项": {
          "2025": { "planCount": 20, "minScore": 500, "maxScore": 528, "avgScore": 505.6, "minRank": 90705 }
        }
      }
    },
    {
      "id": "P033",
      "name": "生物信息学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 513, "maxScore": 543, "avgScore": 520.7, "minRank": 74117, "planCount": 28 }
      },
      "tags": ["新兴专业"],
      "description": "生物数据分析与计算方法",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 15, "minScore": 487, "maxScore": 528, "avgScore": 502.9, "minRank": 105871 }
        },
        "地方专项": {
          "2025": { "planCount": 15, "minScore": 499, "maxScore": 530, "avgScore": 514.7, "minRank": 91840 }
        }
      }
    },
    {
      "id": "P034",
      "name": "生物工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 531, "maxScore": 554, "avgScore": 540.0, "minRank": 62000, "planCount": 45 },
        "2025": { "minScore": 512, "maxScore": 553, "avgScore": 523.0, "minRank": 77996, "planCount": 45 }
      },
      "tags": [],
      "description": "生物发酵工程与生物制药",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 15, "minScore": 491, "maxScore": 527, "avgScore": 502.8, "minRank": 101126 }
        },
        "地方专项": {
          "2025": { "planCount": 15, "minScore": 501, "maxScore": 516, "avgScore": 506.9, "minRank": 89625 }
        }
      }
    },
    {
      "id": "P035",
      "name": "生物技术",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 535, "maxScore": 558, "avgScore": 544.0, "minRank": 58000, "planCount": 48 },
        "2025": { "minScore": 517, "maxScore": 545, "avgScore": 527.6, "minRank": 71197, "planCount": 25 }
      },
      "tags": [],
      "description": "现代生物技术与基因工程应用",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 22, "minScore": 487, "maxScore": 538, "avgScore": 502.6, "minRank": 105871 }
        },
        "地方专项": {
          "2025": { "planCount": 20, "minScore": 498, "maxScore": 535, "avgScore": 511.8, "minRank": 92992 }
        }
      }
    },
    {
      "id": "P036",
      "name": "生物科学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 518, "maxScore": 549, "avgScore": 527.6, "minRank": 71197, "planCount": 26 }
      },
      "tags": [],
      "description": "生命科学研究与教学",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 22, "minScore": 487, "maxScore": 516, "avgScore": 501, "minRank": 105871 }
        },
        "地方专项": {
          "2025": { "planCount": 28, "minScore": 499, "maxScore": 543, "avgScore": 510.3, "minRank": 91840 }
        }
      }
    },
    {
      "id": "P037",
      "name": "电子信息工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 550, "maxScore": 572, "avgScore": 558.0, "minRank": 43000, "planCount": 60 }
      },
      "tags": ["热门专业"],
      "description": "电子信息系统设计与信号处理",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 8, "minScore": 539, "maxScore": 545, "avgScore": 541.8, "minRank": 51361 }
        },
        "地方专项": {
          "2025": { "planCount": 8, "minScore": 546, "maxScore": 553, "avgScore": 547.4, "minRank": 47840 }
        }
      }
    },
    {
      "id": "P038",
      "name": "种子科学与工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 507, "maxScore": 536, "avgScore": 513.1, "minRank": 83292, "planCount": 65 }
      },
      "tags": [],
      "description": "作物种子繁育与质量检测",
      "specialAdmissionData": {}
    },
    {
      "id": "P039",
      "name": "经济学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "经济学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 543, "maxScore": 564, "avgScore": 551.0, "minRank": 50000, "planCount": 38 }
      },
      "tags": [],
      "description": "经济理论分析与政策研究",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 8, "minScore": 523, "maxScore": 534, "avgScore": 527.6, "minRank": 67295 }
        }
      }
    },
    {
      "id": "P040",
      "name": "英语",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "文学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 544, "maxScore": 565, "avgScore": 552.0, "minRank": 49000, "planCount": 35 }
      },
      "tags": [],
      "description": "英语语言文学与翻译",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 18, "minScore": 519, "maxScore": 534, "avgScore": 524.5, "minRank": 71119 }
        }
      }
    },
    {
      "id": "P041",
      "name": "茶学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": true,
      "admissionData": {
        "2024": { "minScore": 542, "maxScore": 570, "avgScore": 553.0, "minRank": 51000, "planCount": 45 },
        "2025": { "minScore": 513, "maxScore": 542, "avgScore": 517.1, "minRank": 74117, "planCount": 46 }
      },
      "tags": ["王牌专业", "全国顶尖", "国家特色"],
      "description": "国家级一流本科专业，全国排名前列，茶产业科研与经营",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 18, "minScore": 500, "maxScore": 533, "avgScore": 511.7, "minRank": 93705 }
        },
        "地方专项": {
          "2025": { "planCount": 22, "minScore": 507, "maxScore": 535, "avgScore": 517.8, "minRank": 83352 }
        }
      }
    },
    {
      "id": "P042",
      "name": "草业科学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 515, "maxScore": 538, "avgScore": 523.0, "minRank": 78000, "planCount": 30 },
        "2025": { "minScore": 504, "maxScore": 528, "avgScore": 510.7, "minRank": 95488, "planCount": 15 }
      },
      "tags": [],
      "description": "草坪建植与草地畜牧业",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 4, "minScore": 491, "maxScore": 509, "avgScore": 499.5, "minRank": 101126 }
        },
        "地方专项": {
          "2025": { "planCount": 4, "minScore": 500, "maxScore": 517, "avgScore": 506.5, "minRank": 90705 }
        }
      }
    },
    {
      "id": "P043",
      "name": "计算机科学与技术",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 555, "maxScore": 582, "avgScore": 565.0, "minRank": 39000, "planCount": 80 }
      },
      "tags": ["热门专业", "省级一流"],
      "description": "培养计算机软硬件系统设计与开发能力",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 545, "maxScore": 562, "avgScore": 549.4, "minRank": 49625 }
        },
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 551, "maxScore": 555, "avgScore": 552.2, "minRank": 44253 }
        }
      }
    },
    {
      "id": "P044",
      "name": "设施农业科学与工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "农学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 512, "maxScore": 535, "avgScore": 518.0, "minRank": 77996, "planCount": 12 }
      },
      "tags": [],
      "description": "设施农业环境调控与栽培",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 508, "maxScore": 532, "avgScore": 516.8, "minRank": 82093 }
        },
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 512, "maxScore": 521, "avgScore": 517, "minRank": 77998 }
        }
      }
    },
    {
      "id": "P045",
      "name": "车辆工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 515, "maxScore": 539, "avgScore": 520.6, "minRank": 68497, "planCount": 63 }
      },
      "tags": [],
      "description": "",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 13, "minScore": 520, "maxScore": 534, "avgScore": 526.4, "minRank": 71142 }
        },
        "地方专项": {
          "2025": { "planCount": 13, "minScore": 525, "maxScore": 542, "avgScore": 531.8, "minRank": 65455 }
        }
      }
    },
    {
      "id": "P046",
      "name": "金融学",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "经济学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 548, "maxScore": 570, "avgScore": 556.0, "minRank": 45000, "planCount": 40 }
      },
      "tags": [],
      "description": "金融机构运营与投资分析",
      "specialAdmissionData": {}
    },
    {
      "id": "P047",
      "name": "食品科学与工程",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": true,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 534, "maxScore": 558, "avgScore": 543.0, "minRank": 59000, "planCount": 65 },
        "2025": { "minScore": 525, "maxScore": 556, "avgScore": 531.2, "minRank": 60228, "planCount": 85 }
      },
      "tags": ["国家一流"],
      "description": "食品加工工艺与质量安全控制",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 15, "minScore": 516, "maxScore": 544, "avgScore": 523.3, "minRank": 74057 }
        },
        "地方专项": {
          "2025": { "planCount": 17, "minScore": 525, "maxScore": 544, "avgScore": 533.4, "minRank": 65455 }
        }
      }
    },
    {
      "id": "P048",
      "name": "食品营养与健康",
      "category": "物理类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 512, "maxScore": 536, "avgScore": 518.3, "minRank": 77996, "planCount": 20 }
      },
      "tags": [],
      "description": "食品营养评价与健康促进",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 502, "maxScore": 524, "avgScore": 508.9, "minRank": 88548 }
        },
        "地方专项": {
          "2025": { "planCount": 15, "minScore": 505, "maxScore": 524, "avgScore": 513.3, "minRank": 85552 }
        }
      }
    },
    {
      "id": "H001",
      "name": "人文地理与城乡规划",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 537, "maxScore": 560, "avgScore": 542.6, "minRank": 12736, "planCount": 20 }
      },
      "tags": [],
      "description": "城乡空间规划与区域发展",
      "specialAdmissionData": {}
    },
    {
      "id": "H002",
      "name": "会计学",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 553, "maxScore": 572, "avgScore": 560.0, "minRank": 8500, "planCount": 35 },
        "2025": { "minScore": 557, "maxScore": 568, "avgScore": 560.3, "minRank": 9094, "planCount": 99 }
      },
      "tags": ["热门专业"],
      "description": "财务会计与审计实务",
      "specialAdmissionData": {}
    },
    {
      "id": "H003",
      "name": "公共事业管理",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 534, "maxScore": 553, "avgScore": 541.0, "minRank": 11500, "planCount": 22 }
      },
      "tags": [],
      "description": "公共部门管理与政策执行",
      "specialAdmissionData": {}
    },
    {
      "id": "H004",
      "name": "农林经济管理",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 533, "maxScore": 552, "avgScore": 540.0, "minRank": 11700, "planCount": 20 },
        "2025": { "minScore": 542, "maxScore": 559, "avgScore": 548.1, "minRank": 12003, "planCount": 42 }
      },
      "tags": [],
      "description": "农业产业经济与管理",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 532, "maxScore": 548, "avgScore": 537.2, "minRank": 15662 }
        },
        "地方专项": {
          "2025": { "planCount": 2, "minScore": 554, "maxScore": 554, "avgScore": 554, "minRank": 9878 }
        }
      }
    },
    {
      "id": "H005",
      "name": "劳动与社会保障",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 538, "maxScore": 551, "avgScore": 543.4, "minRank": 12515, "planCount": 15 }
      },
      "tags": [],
      "description": "社会保障制度与劳动关系管理",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 529, "maxScore": 543, "avgScore": 530.8, "minRank": 16114 }
        },
        "地方专项": {
          "2025": { "planCount": 20, "minScore": 535, "maxScore": 539, "avgScore": 536.3, "minRank": 14799 }
        }
      }
    },
    {
      "id": "H006",
      "name": "国际经济与贸易",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "经济学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 540, "maxScore": 561, "avgScore": 546.3, "minRank": 11556, "planCount": 38 }
      },
      "tags": ["热门专业"],
      "description": "国际贸易实务与跨境电商",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 3, "minScore": 545, "maxScore": 554, "avgScore": 549.7, "minRank": 12060 }
        }
      }
    },
    {
      "id": "H007",
      "name": "土地资源管理",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 539, "maxScore": 554, "avgScore": 544.1, "minRank": 12003, "planCount": 22 }
      },
      "tags": [],
      "description": "土地资源调查与利用规划",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 3, "minScore": 534, "maxScore": 540, "avgScore": 537, "minRank": 15070 }
        },
        "地方专项": {
          "2025": { "planCount": 2, "minScore": 544, "maxScore": 551, "avgScore": 547.5, "minRank": 12351 }
        }
      }
    },
    {
      "id": "H008",
      "name": "工商管理",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 541, "maxScore": 560, "avgScore": 548.0, "minRank": 10400, "planCount": 30 },
        "2025": { "minScore": 541, "maxScore": 565, "avgScore": 548.9, "minRank": 11357, "planCount": 54 }
      },
      "tags": [],
      "description": "企业运营管理与市场营销",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 2, "minScore": 536, "maxScore": 541, "avgScore": 538.5, "minRank": 14516 }
        },
        "地方专项": {
          "2025": { "planCount": 2, "minScore": 527, "maxScore": 527, "avgScore": 527, "minRank": 14238 }
        }
      }
    },
    {
      "id": "H009",
      "name": "市场营销",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 530, "maxScore": 549, "avgScore": 537.0, "minRank": 12200, "planCount": 28 },
        "2025": { "minScore": 539, "maxScore": 556, "avgScore": 545.8, "minRank": 11908, "planCount": 39 }
      },
      "tags": [],
      "description": "市场调研与品牌营销",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 8, "minScore": 531, "maxScore": 537, "avgScore": 532.4, "minRank": 15969 }
        },
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 517, "maxScore": 526, "avgScore": 520.8, "minRank": 73013 }
        }
      }
    },
    {
      "id": "H010",
      "name": "应用心理学",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 543, "maxScore": 562, "avgScore": 550.0, "minRank": 10100, "planCount": 20 },
        "2025": { "minScore": 542, "maxScore": 560, "avgScore": 547.4, "minRank": 12003, "planCount": 15 }
      },
      "tags": [],
      "description": "心理咨询与心理健康教育",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 531, "maxScore": 543, "avgScore": 535.6, "minRank": 15969 }
        },
        "地方专项": {
          "2025": { "planCount": 5, "minScore": 544, "maxScore": 549, "avgScore": 546.4, "minRank": 12351 }
        }
      }
    },
    {
      "id": "H011",
      "name": "思想政治教育",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "法学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 548, "maxScore": 562, "avgScore": 552.4, "minRank": 7042, "planCount": 43 }
      },
      "tags": [],
      "description": "思想政治教育理论与方法",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 3, "minScore": 554, "maxScore": 560, "avgScore": 557.7, "minRank": 9878 }
        }
      }
    },
    {
      "id": "H012",
      "name": "投资学",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "经济学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 535, "maxScore": 555, "avgScore": 542.6, "minRank": 13403, "planCount": 18 }
      },
      "tags": [],
      "description": "投资分析与资产管理",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 10, "minScore": 529, "maxScore": 532, "avgScore": 530.1, "minRank": 16114 }
        }
      }
    },
    {
      "id": "H013",
      "name": "教育学（师范）",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "教育学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 545, "maxScore": 564, "avgScore": 552.0, "minRank": 9800, "planCount": 25 },
        "2025": { "minScore": 545, "maxScore": 566, "avgScore": 553.1, "minRank": 12066, "planCount": 35 }
      },
      "tags": [],
      "description": "教育教学理论与师范技能",
      "specialAdmissionData": {
        "地方专项": {
          "2025": { "planCount": 2, "minScore": 552, "maxScore": 560, "avgScore": 556, "minRank": 10343 }
        }
      }
    },
    {
      "id": "H014",
      "name": "旅游管理",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 531, "maxScore": 550, "avgScore": 538.0, "minRank": 12000, "planCount": 25 }
      },
      "tags": [],
      "description": "旅游规划与景区运营管理",
      "specialAdmissionData": {}
    },
    {
      "id": "H015",
      "name": "日语",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "文学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 539, "maxScore": 558, "avgScore": 546.0, "minRank": 10700, "planCount": 18 },
        "2025": { "minScore": 538, "maxScore": 556, "avgScore": 543.2, "minRank": 12003, "planCount": 35 }
      },
      "tags": [],
      "description": "日语语言文化与商务日语",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 15, "minScore": 530, "maxScore": 535, "avgScore": 531.3, "minRank": 15307 }
        },
        "地方专项": {
          "2025": { "planCount": 10, "minScore": 535, "maxScore": 545, "avgScore": 538.3, "minRank": 14799 }
        }
      }
    },
    {
      "id": "H016",
      "name": "法学",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "法学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 556, "maxScore": 575, "avgScore": 563.0, "minRank": 8000, "planCount": 25 },
        "2025": { "minScore": 547, "maxScore": 563, "avgScore": 553.5, "minRank": 4799, "planCount": 111 }
      },
      "tags": ["热门专业"],
      "description": "法律实务与司法实践",
      "specialAdmissionData": {}
    },
    {
      "id": "H017",
      "name": "电子商务",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "管理学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 529, "maxScore": 548, "avgScore": 536.0, "minRank": 12400, "planCount": 30 }
      },
      "tags": [],
      "description": "电商平台运营与网络营销",
      "specialAdmissionData": {}
    },
    {
      "id": "H018",
      "name": "社会工作",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "法学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 536, "maxScore": 555, "avgScore": 543.0, "minRank": 11200, "planCount": 20 }
      },
      "tags": [],
      "description": "社会服务与社会治理",
      "specialAdmissionData": {}
    },
    {
      "id": "H019",
      "name": "经济学",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "经济学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 538, "maxScore": 557, "avgScore": 545.0, "minRank": 10900, "planCount": 25 },
        "2025": { "minScore": 542, "maxScore": 561, "avgScore": 549.6, "minRank": 12003, "planCount": 46 }
      },
      "tags": [],
      "description": "经济理论分析与政策研究",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 535, "maxScore": 554, "avgScore": 541.8, "minRank": 14799 }
        },
        "地方专项": {
          "2025": { "planCount": 3, "minScore": 546, "maxScore": 553, "avgScore": 548.7, "minRank": 11789 }
        }
      }
    },
    {
      "id": "H020",
      "name": "英语",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "文学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 549, "maxScore": 568, "avgScore": 556.0, "minRank": 9200, "planCount": 30 },
        "2025": { "minScore": 543, "maxScore": 563, "avgScore": 549.3, "minRank": 12399, "planCount": 72 }
      },
      "tags": [],
      "description": "英语语言文学与翻译",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 20, "minScore": 532, "maxScore": 550, "avgScore": 537.9, "minRank": 15662 }
        },
        "地方专项": {
          "2025": { "planCount": 18, "minScore": 538, "maxScore": 556, "avgScore": 543.4, "minRank": 13983 }
        }
      }
    },
    {
      "id": "H021",
      "name": "行政管理",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 540, "maxScore": 556, "avgScore": 545.3, "minRank": 11898, "planCount": 44 }
      },
      "tags": [],
      "description": "",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 531, "maxScore": 537, "avgScore": 532.6, "minRank": 15969 }
        },
        "地方专项": {
          "2025": { "planCount": 7, "minScore": 540, "maxScore": 546, "avgScore": 541.7, "minRank": 13406 }
        }
      }
    },
    {
      "id": "H022",
      "name": "金融学",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "经济学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2024": { "minScore": 547, "maxScore": 566, "avgScore": 554.0, "minRank": 9500, "planCount": 30 },
        "2025": { "minScore": 544, "maxScore": 565, "avgScore": 552.2, "minRank": 7995, "planCount": 54 }
      },
      "tags": [],
      "description": "金融机构运营与投资分析",
      "specialAdmissionData": {
        "国家专项": {
          "2025": { "planCount": 5, "minScore": 532, "maxScore": 543, "avgScore": 535, "minRank": 15662 }
        }
      }
    },
    {
      "id": "H023",
      "name": "风景园林",
      "category": "历史类",
      "batch": "本科批",
      "duration": "四年",
      "degreeType": "工学学士",
      "isNationalFirstClass": false,
      "isCharacteristic": false,
      "admissionData": {
        "2025": { "minScore": 538, "maxScore": 552, "avgScore": 542.2, "minRank": 12003, "planCount": 10 }
      },
      "tags": [],
      "description": "风景园林规划设计与绿地管理",
      "specialAdmissionData": {}
    }
  ]
};
