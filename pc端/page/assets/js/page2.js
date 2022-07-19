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
        // 坐标轴轴线
        axisLine: {
          show: false
        },
        // 坐标轴刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          // formatter: '{value} ml'
          formatter: '{value}'
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
  var pieChart = echarts.init(document.getElementById('pieChart'));

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
  var pieOption = {
    tooltip: {
      trigger: 'item',
      // formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    // 图例
    legend: {
      orient: 'vertical',
      right: 10,
      top: 80,
      bottom: 20,
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
      left: '20%',
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
      center: ['30%', '50%'], // 默认全局居中
      label: {
        show: false
      },
      data: weekDataLeft,
      radius: ['35%', '50%']
    }]
  };
  pieChart.setOption(pieOption);

  // 水球
  var waterPolo = echarts.init(document.getElementById('water-polo'));
  var waterOption = {
    title: [{
      text: '当前工单池',
      x: '23%',
      y: '0',
      textStyle: {
        fontSize: 12,
        fontWeight: '100',
        color: '#323232',
        lineHeight: 16,
        textAlign: 'center',
      },
    }],
    // graphic: [{
    //   type: 'group',
    //   left: 'center',
    //   top: '35%',
    //   children: [{
    //     type: 'text',
    //     z: 100,
    //     left: '40',
    //     top: 'middle',
    //     style: {
    //       fill: '#aab2fa',
    //       text: '当前工单池',
    //       font: '20px Microsoft YaHei'
    //     }
    //   }]
    // }],
    series: [{
        type: 'liquidFill',
        radius: '80%',
        center: ['50%', '55%'],
        color: [{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0,
              color: 'rgba(54,120,255,0.5)',
            },
            {
              offset: 1,
              color: '#3678FF',
            },
          ],
          globalCoord: false,
        }, ],
        data: [0.45], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 1,
          color: 'RGBA(54,120,255,0.1)',
        },
        label: {
          normal: {
            textStyle: {
              fontSize: 18,
              color: '#fff',
            },
          }
        },
        outline: {
          show: false,
          borderDistance: 10,
          itemStyle: {
            borderWidth: 2,
            borderColor: '#112165',
          },
        },
      },
    ],
  };
  if(waterOption){
    waterPolo.setOption(waterOption);
  }
