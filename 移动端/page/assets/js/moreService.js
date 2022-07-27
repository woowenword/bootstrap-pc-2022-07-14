// ssc 常用服务入口
let useFrequentlyArr = [];
let useFrequentlyUl = document.getElementById('use-frequently-ul');
let dialog = document.getElementById('dialog');
// 定义添加动作的定时器
let timeOutEvent = 0;

// 定义删除动作的定时器
let timeOutEventDel = 0;


// ssc常用服务入口渲染
function renderHtml() {
  let useFrequentlyStr = '';

  useFrequentlyArr.length > 0 && useFrequentlyArr.forEach((item, index) => {
    useFrequentlyStr += `<li class="press-img press-img-del">
      <img src="${item.src}" />
      <i class="bi bi-dash-circle-fill icon-position none" data-id="${item.num}"></i>
      <p>${item.text}</p>
    </li>`
  })
  useFrequentlyUl.innerHTML = useFrequentlyStr
}


// 组织人事
let sscServeUl = document.getElementById('ssc-serve-ul');


// 长按事件--显示添加按钮
sscServeUl.addEventListener('touchstart', function (ev) {
  let target = ev.target;
  // UL/LI/IMG/I/P

  if (target.tagName === 'IMG') { // 点击图片则会显示添加按钮

    timeOutEvent && clearTimeout(timeOutEvent); //开启定时器前，先清除定时器，防止重复触发

    timeOutEvent = setTimeout(function () { //此处为长按事件-----在此显示遮罩层及按钮

      addStyle(target);

    }, 500)

    ev.preventDefault() // 阻止系统默认事件
    return false;
  } else {
    clearTimeout(timeOutEvent);

    if (target.tagName === 'I') { // 点击添加
      if (useFrequentlyArr.length > 0) {
        if (useFrequentlyArr.length > 8) { // 最多允许8个
          alert('最多允许8个常用服务哦')
          return false
        }

        // 如果数组中存在某一icon,则不添加
        if (useFrequentlyArr.some(item => item.num == target.attributes.markplus.value)) {
          alert('已经添加过了哦')
          return false
        } else {
          pushArr()
        }
      } else { // 如果数组为空数组，则直接push
        pushArr()
      }
      renderHtml(); // 渲染页面

      delStyle(target); // 去除style样式

    } else if (target.tagName === 'UL') {
      return false
    } else { // 点击其他地方
      delStyle(target)
    }
  }

  function pushArr() {
    useFrequentlyArr.push({
      num: target.attributes.markplus.value,
      src: target.parentNode.children[0].currentSrc,
      text: target.parentNode.children[2].innerText
    })
  }

})

// 单击遮照层--按钮&样式消失
dialog.addEventListener('touchend', function (ev) {
  let target = ev.target;

  target.classList.remove('block');
  target.classList.add('none');

  document.querySelectorAll('.press-img').forEach(function (dom) {
    dom.classList.remove('shake');
    dom.children[1].classList.add('none');
    dom.children[1].classList.remove('block');
  })
})


// 删除动作：长按图片--显示删除按钮
useFrequentlyUl.addEventListener('touchstart', function (ev) {
  let target = ev.target;
  if (target.tagName === 'IMG') { // 点击图片则会显示添加按钮

    timeOutEventDel && clearTimeout(timeOutEventDel); //开启定时器前，先清除定时器，防止重复触发

    timeOutEventDel = setTimeout(function () { //此处为长按事件-----在此显示遮罩层及删除按钮

      addStyle(target);

    }, 500)

    ev.preventDefault() // 阻止系统默认事件
    return false;
  } else {
    clearTimeout(timeOutEventDel);

    if (target.tagName === 'I') {
      if (useFrequentlyArr.length > 1) {
        useFrequentlyArr.some((item, index) => {
          if (item.num == target.attributes['data-id'].value) {
            useFrequentlyArr.splice(index, 1)
          }
        })
      } else {
        useFrequentlyArr = []
      }
      showOrHidDialog('hide');
      renderHtml()
      return false;
    } else if (target.tagName === 'UL') {
      return false
    } else {
      delStyle(target);
    }
  }
})

// 移动元素--拖拽的时候
useFrequentlyUl.addEventListener('touchmove', function (ev) {
  clearTimeout(timeOutEventDel);
})


function delStyle(domEvent) {
  showOrHidDialog('hide'); // 隐藏遮照层

  let elseLi;
  if (domEvent.className.indexOf('press-img') > -1) { //点击的是父容器
    elseLi = domEvent.parentNode.children;
  } else {
    elseLi = domEvent.parentNode.parentNode.children;
  }
  for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
    if (elseLi[i].children[1]) {
      elseLi[i].classList.remove('shake');
      elseLi[i].children[1].classList.add('none');
      elseLi[i].children[1].classList.remove('block');
    }
  }
}

function addStyle(domEvent) {
  showOrHidDialog('show'); // 显示遮照层

  let elseLi = domEvent.parentNode.parentNode.children;
  for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
    if (elseLi[i].children[1]) {
      elseLi[i].classList.add('shake');
      elseLi[i].children[1].classList.remove('none');
      elseLi[i].children[1].classList.add('block');
    }
  }
}

function showOrHidDialog(type) {
  if (type === 'show') {
    dialog.classList.remove('none');
    dialog.classList.add('block');
  } else {
    dialog.classList.add('none');
    dialog.classList.remove('block');
  }
}

//拖拽事件
var option = {
  animation: 1000,
  draggable: ".press-img-del",
  direction: 'horizontal',
  forceFallback: true,
  group: 'itxst.com',
  //拖动结束
  onEnd: function (evt) {
    console.log(evt);
    console.log(evt.oldIndex) // 当前行的被拖拽前的顺序
	  console.log(evt.newIndex) // 当前行的被拖拽后的顺序
    console.log(useFrequentlyArr,77777)
    const currRow = useFrequentlyArr.splice(evt.oldIndex, 1)[0]
	  useFrequentlyArr.splice(evt.newIndex, 0, currRow)
    console.log(useFrequentlyArr,8888888)
    const newData = []
    useFrequentlyArr.forEach((item, index) => {
      newData[index] = {
        num: item.num,
        src: item.src,
        text: item.text
      }
    })
    console.log(newData,999999)
    renderHtml()
  },
};
//初始化
var sortable2 = Sortable.create(useFrequentlyUl, option);