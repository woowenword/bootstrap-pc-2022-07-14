let home = document.getElementById('home');
let work = document.getElementById('work');
let message = document.getElementById('message');

// 工单
work.addEventListener('touchstart',function(){
  window.location.href='workOrderList.html'
})

// 消息--暂时跳转为工单详情页
message.addEventListener('touchstart',function(){
  window.location.href='workOrderDetail.html'
})


// 更多服务
let seeMore = document.getElementById('more-service');
seeMore.addEventListener('touchstart',function(){
  window.location.href='moreService.html'
})

// 水球
var waterPolo = echarts.init(document.getElementById('water-polo'));
var waterOption = {
  title: [{
    show: true,
    text: '当前工单池',
    x: 'center',
    y: 'top',
    textStyle: {
      fontSize: '14',
      fontWeight: '60',
      color: '#323232',
      lineHeight: 16,
      textAlign: 'center',
    },
  }],
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
  // 调整图表位置
  grid: {
    left: '1%',
    right: '1%',
    top: '10%',
    bottom: '20%',
    containLabel: true
  },
  // 图例样式
  legend: {
    orient: 'horizontal',
    itemGap: 40, // 图例每项之间的间隔
    data: [{
        name: '办结量',
        icon: 'circle'
      },
      {
        name: '接单量',
        icon: 'circle'
      },
      {
        name: '办结率',
        icon: 'circle'
      }
    ],
    bottom: 0,
    itemWidth: 7,  // 小圆点的大小
    textStyle: {
      fontSize: '14',
      color: '#323232'
    }
  },
  // x轴
  xAxis: [{
    type: 'category',
    data: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07'],
    axisPointer: {
      type: 'shadow'
    },
    axisLabel: {
      // formatter: '{value} ml'
      formatter: '{value}',
      fontSize: 14
    },
  }],
  // y轴
  yAxis: [{
      type: 'value',
      min: 0,
      max: 200,
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
        formatter: '{value}',
        fontSize: 14
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
      name: '办结量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          // return value + ' ml';
          return value;
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6
      ],
      itemStyle: {
        color: '#3678FF'
      }
    },
    {
      name: '接单量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value
        }
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7
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
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0],
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
    right: '10%',
    top: '15%',
    itemWidth: 7,
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
    top: '20%',
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
    center: ['30%', '45%'], // 默认全局居中
    label: {
      show: false
    },
    data: weekDataLeft,
    radius: ['60%','90%']
  }]
};
pieChart.setOption(pieOption);