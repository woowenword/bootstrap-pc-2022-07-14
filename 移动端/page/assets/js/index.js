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
