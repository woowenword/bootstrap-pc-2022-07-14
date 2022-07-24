let timeOutEvent = 0;
let startTime = '';
let endTime = '';


let jsPressLiPlusXc = document.querySelectorAll('.js-press-li-plus-xc');
jsPressLiPlusXc.forEach(element => {
  
  element.addEventListener('touchstart', function (ev) {
    startTime = +new Date()
    timeOutEvent = setTimeout(function () {
      longPress(ev.target)
    }, 700)
  })


  element.addEventListener('touchend', function (ev) {
    console.log(ev.target,8888)
    endTime = +new Date()
    clearTimeout(timeOutEvent)
    if (endTime - startTime < 700) {
      // 处理点击事件
      alert('点击')
    }
  })
});





let plusWrapArr = document.querySelectorAll(".bi-plus-circle-fill")
plusWrapArr.forEach(element => {
  element.addEventListener('tap', function () {
    alert(1)
  })
})



function gtouchstart(target) {
  timeOutEvent = setTimeout(function () {
    longPress(target)
  }, 700);
  return false;
  //单击开始计时 500代表0.5秒
};

function gtouchend() {
  clearTimeout(timeOutEvent);
  if (timeOutEvent != 0) {
    alert('单击执行代码区');
  }
  return false;
};

function gtouchmove() {
  clearTimeout(timeOutEvent);
  timeOutEvent = 0;
  alert('单击未松开直接滑动的执行代码区，默认取消任何操作');
};

function longPress(target) {
  timeOutEvent = 0;
  let elseLi = target.parentNode.parentNode.children;
  for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
    if (elseLi[i].children[1]) {
      elseLi[i].classList.add('shake');
      elseLi[i].children[1].classList.remove('none');
      elseLi[i].children[1].classList.add('block');
    }
  }
}
