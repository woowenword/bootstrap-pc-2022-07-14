  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // 基于准备好的dom，初始化echarts实例---柱状图
  var dailyWeekChart = echarts.init(document.getElementById('daily-week'));
  var dailyMonthChart = echarts.init(document.getElementById('daily-month'));
  var dailyYearChart = echarts.init(document.getElementById('daily-year'));

  var dailyWeekOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    // 位置
    grid: {
      left: '4%',
      right: '3%',
      containLabel: true
    },
    // 图例样式
    legend: {
      orient: 'horizontal',
      itemGap: 40,
      data: [{
          name: '新增工单',
          icon: 'circle'
        },
        {
          name: '结单量',
          icon: 'circle'
        },
        {
          name: '办结率',
          icon: 'circle'
        }
      ],
      bottom: 10,
      itemWidth: 8,
    },
    // x轴
    xAxis: [{
      type: 'category',
      data: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07', '12-08', '12-09', '12-10'],
      axisPointer: {
        type: 'shadow'
      },
    }],
    // y轴
    yAxis: [{
        type: 'value',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          // formatter: '{value} ml'
          formatter: '{value}'
        },
        // 坐标轴轴线
        axisLine: {
          show: false
        },
        // 坐标轴刻度
        axisTick: {
          show: false
        },
        splitLine: { //网格线
          lineStyle: {
            type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
          },
          show: true //隐藏或显示
        }
      },
      {
        show: false,
        type: 'value',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} %'
        },
        splitLine: { //网格线
          lineStyle: {
            type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
          },
          show: true //隐藏或显示
        }
      }
    ],
    // 数据
    series: [{
        name: '新增工单',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            // return value + ' ml';
            return value;
          }
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ],
        itemStyle: {
          color: '#3678FF'
        }
      },
      {
        name: '结单量',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value
          }
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ],
        itemStyle: {
          color: '#F39800'
        }
      },
      {
        name: '办结率',
        type: 'line',
        smooth: true, //true 有弧度 ，false 没弧度（直线）
        symbol: 'circle', // 将小圆点改成实心
        symbolSize: 5, //小圆点的大小
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' °C';
          }
        },
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        itemStyle: {
          color: '#00C5BD'
        }
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  dailyWeekChart.setOption(dailyWeekOption);
  dailyMonthChart.setOption(dailyWeekOption);
  dailyYearChart.setOption(dailyWeekOption);

  // 基于准备好的dom，初始化echarts实例---饼图
  var pieChartWeekLeft = echarts.init(document.getElementById('pieChart-week-left'));
  var pieChartWeekRight = echarts.init(document.getElementById('pieChart-week-right'));
  var pieChartMonthLeft = echarts.init(document.getElementById('pieChart-month-left'));
  var pieChartMonthRight = echarts.init(document.getElementById('pieChart-month-right'));
  var pieChartYearLeft = echarts.init(document.getElementById('pieChart-year-left'));
  var pieChartYearRight = echarts.init(document.getElementById('pieChart-year-right'));

  var weekDataLeft = [{
      value: 335,
      name: '人事工单',
      itemStyle: {
        normal: {
          color: "#00C5BD"
        }
      }
    },
    {
      value: 234,
      name: '联盟广告',
      itemStyle: {
        normal: {
          color: "#F39800"
        }
      }
    },
    {
      value: 1548,
      name: '搜索引擎',
      itemStyle: {
        normal: {
          color: "#3678FF"
        }
      }
    }
  ]
  var pieOptionWeekLeft = {
    tooltip: {
      trigger: 'item',
      // formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    // 图例
    legend: {
      orient: 'vertical',
      right: 0,
      top: 100,
      itemWidth: 5,
      itemGap: 25,
      textStyle: {
        // 点的颜色。
        color: '#656565'
      },
      data: [{
          name: '人事工单',
          icon: 'circle'
        },
        {
          name: '联盟广告',
          icon: 'circle'
        },
        {
          name: '搜索引擎',
          icon: 'circle'
        }
      ],
      formatter: function (name) {
        var total = 0;
        var target;
        for (var i = 0, l = weekDataLeft.length; i < l; i++) {
          total += weekDataLeft[i].value;
          if (weekDataLeft[i].name == name) {
            target = weekDataLeft[i].value
          }
        }
        return name + ' ' + ((target / total) * 100).toFixed(2) + '%';
      }
    },
    // 环形中间title
    title: {
      text: '500',
      subtext: '全部工单',
      // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
      x: 'center',
      // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
      y: 'center',
      left: '33%',
      top: '40%',
      // 主标题文本样式设置
      textStyle: {
        fontSize: 24,
        fontWeight: 'normal',
        fantFamily: 'HelveticaNeue-Bold',
        color: '#323232'
      },
      // 副标题文本样式设置
      subtextStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#656565'
      }
    },
    //数据
    series: [{
      type: 'pie',
      center: ['40%', '50%'], //位置 默认全局居中
      label: {
        show: false
      },
      data: weekDataLeft,
      radius: ['40%', '60%']
    }]
  };
  pieChartWeekLeft.setOption(pieOptionWeekLeft);
  pieChartWeekRight.setOption(pieOptionWeekLeft);
  pieChartMonthLeft.setOption(pieOptionWeekLeft);
  pieChartMonthRight.setOption(pieOptionWeekLeft);
  pieChartYearLeft.setOption(pieOptionWeekLeft);
  pieChartYearRight.setOption(pieOptionWeekLeft);

  // 基于准备好的dom，初始化echarts实例---仪表盘
  var domDashBoard = echarts.init(document.getElementById('dash-board'));
  var dataValue = 44;
  var optionDashBoard = {
    tooltip: {
      formatter: "{b} : {c}%"
    },

    series: [{
        name: "",
        type: "gauge",
        // center: ['20%', '50%'],
        radius: '50%',

        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [dataValue / 100, '#CF7839'],
              [1, "#CCCCCC"]
            ],
            width: 8
          }
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,

        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          show: false,
        },
        detail: {
          formatter: function (value) {
            if (value !== 0) {
              var num = Math.round(value);
              return parseInt(num).toFixed(0) + "%";
            } else {
              return 0;
            }
          },
          offsetCenter: [0, 46],
          textStyle: {
            padding: [0, 0, 0, 0],
            fontSize: 18,
            fontWeight: '700',
            color: '#323232'
          }
        },
        title: { //标题
          show: true,
          offsetCenter: [0, 77], // x, y，单位px
          textStyle: {
            color: "#323232",
            fontSize: 14, //表盘上的标题文字大小
            fontWeight: 400,
            fontFamily: 'PingFangSC'
          }
        },
        data: [{
          name: "业务负载率",
          value: dataValue,
        }],
        // 指针
        pointer: {
          show: true,
          length: '70%',
          radius: '10%',
          width: 5, //指针粗细
        },
        animationDuration: 4000,
      },
      {
        name: '外部刻度',
        type: 'gauge',
        //  center: ['20%', '50%'],
        radius: '75%',
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 10, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: false,
          lineStyle: {
            width: 1,
            color: [
              [1, 'rgba(0,0,0,1)']
            ]
          }
        }, //仪表盘轴线
        axisLabel: {
          show: true,
          color: '#898989',
          distance: 25,
          formatter: function (v) {
            switch (v + '') {
              case '0':
                return '';
              case '10':
                return '';
              case '20':
                return '差';
              case '30':
                return '';
              case '40':
                return '中';
              case '50':
                return '';
              case '60':
                return '良';
              case '70':
                return '';
              case '80':
                return '优';
              case '90':
                return '';
              case '100':
                return '';
            }
          }
        }, //刻度标签。
        axisTick: {
          show: true,
          splitNumber: 7,
          lineStyle: {
            color: '#ccc', //用颜色渐变函数不起作用
            width: 1,
          },
          length: -12
        }, //刻度样式
        splitLine: {
          show: true,
          length: -18,
          lineStyle: {
            color: '#ddd', //用颜色渐变函数不起作用
          }
        }, //分隔线样式
        detail: {
          show: false
        },
        pointer: {
          show: false
        }
      },
    ]
  };

  domDashBoard.setOption(optionDashBoard);