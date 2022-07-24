// ssc 常用服务入口
let useFrequentlyArr = [{}];
let useFrequentlyUl = document.getElementById('use-frequently-ul');
let dialog = document.getElementById('dialog');
// 定义添加动作的定时器
let timeOutEvent = 0;
let longClick = 0;
// 定义删除动作的定时器
let timeOutEventDel = null;
let longClickDel = null;


let sscIconDomPlusArr = document.querySelectorAll('press-img-plus');



// ssc常用服务入口渲染
function renderHtml() {
  let useFrequentlyStr = '';

  useFrequentlyArr.length> 0 && useFrequentlyArr.forEach((item, index) => {
    useFrequentlyStr += `<li class="press-img-del">
      <img src="${item.src}" />
      <i class="bi bi-dash-circle-fill icon-position none" markdel="${index}"></i>
      <p>${item.text}</p>
    </li>`
  })
  useFrequentlyUl.innerHTML = useFrequentlyStr
}


// 组织人事
let sscServeUl = document.getElementById('ssc-serve-ul');


// 长按事件--显示添加按钮
sscServeUl.addEventListener('touchstart',function(ev){
  let target = ev.target;
  if(target.tagName === 'IMG'){ // 点击图片则会显示添加按钮

    //开启定时器前，先清除定时器，防止重复触发
    timeOutEvent && clearTimeout(timeOutEvent);
    timeOutEvent = setTimeout(function () {
      //此处为长按事件-----在此显示遮罩层及按钮
      longClick = 1;

      // 显示遮照层
      showOrHidDialog('show');

      let elseLi = target.parentNode.parentNode.children;
      for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
        if (elseLi[i].children[1]) {
          elseLi[i].classList.add('shake');
          elseLi[i].children[1].classList.remove('none');
          elseLi[i].children[1].classList.add('block');
        }
      }
    }, 500)
    ev.preventDefault() // 阻止系统默认事件
    return false; 
  }else if(target.tagName === 'I'){
    longClickDel == 0;
    clearTimeout(timeOutEvent);
    //此处为点击事件----在此处添加跳转详情页
    console.log(useFrequentlyArr,5555)
    // 如果useFrequentlyArr数组中已经存在某icon，则return
    console.log(target.attributes.markplus.value,444444)
    
    useFrequentlyArr.push({
      num: target.attributes.markplus.value,
      src: target.parentNode.children[0].currentSrc,
      text: target.parentNode.children[2].innerText
    })
    renderHtml()
    console.log(useFrequentlyArr,66666)
    
  }else { // 点击其他地方
    longClickDel == 0;
    clearTimeout(timeOutEvent);
    let elseLi;
    if(target.className.indexOf('js-icon-wrap') > -1){ //点击的是父容器
      elseLi = target.children;
    }else{ 
      elseLi = target.parentNode.parentNode.children;
    }

    for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
      if (elseLi[i].children[1]) {
        elseLi[i].classList.remove('shake');
        elseLi[i].children[1].classList.add('none');
        elseLi[i].children[1].classList.remove('block');
      }
    }
  }
})

// 长按事件--点击添加事件---touchend 没触发这是为什么？
sscServeUl.addEventListener('touchend',function(ev){
  let target = ev.target;
  longClickDel == 0;
  clearTimeout(timeOutEvent);

  if(target.tagName === 'I'){ // 点击plus则添加,否则点击其他dom添加按钮消失
    if (timeOutEventDel != 0 && longClickDel == 0) { 
      //此处为点击事件----在此处添加跳转详情页
      useFrequentlyArr.push({
        num: target.attributes.markplus.value,
        src: target.parentNode.children[0].currentSrc,
        text: target.parentNode.children[2].innerText
      })
      renderHtml()
    }
  }else {
    
    let elseLi;
    
    if(target.className.indexOf('js-icon-wrap') > -1){ //点击的是父容器
      elseLi = target.children;
    }else{ 
      elseLi = target.parentNode.parentNode.children;
    }

    for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
      if (elseLi[i].children[1]) {
        elseLi[i].classList.remove('shake');
        elseLi[i].children[1].classList.add('none');
        elseLi[i].children[1].classList.remove('block');
      }
    }
    // 隐藏遮照层
    showOrHidDialog('hide');
  }
})


// 单击遮照层--按钮&样式消失
dialog.addEventListener('touchend',function(ev){
  let target = ev.target;
  

  target.classList.remove('block');
  target.classList.add('none');

  sscIconDomPlusArr.forEach(function(dom){
    dom.classList.remove('shake');
    dom.children[1].classList.add('none');
    dom.children[1].classList.remove('block');
  })

})




// 长按删除事件--显示删除按钮
useFrequentlyUl.addEventListener('touchstart',function(ev){
  let target = ev.target;
  // 无论长按哪一个dom，都会将加号icon展示出来
  longClickDel = 0; //设置初始为0
  timeOutEventDel = setTimeout(function () {
    //此处为长按事件-----在此显示遮罩层及删除按钮
    longClickDel = 1;

    let elseLi = target.parentNode.parentNode.children;
    for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
      if (elseLi[i].children[1]) {
        elseLi[i].classList.add('shake');
        elseLi[i].children[1].classList.remove('none');
        elseLi[i].children[1].classList.add('block');
      }
    }
  }, 500)

})

// 长按删除事件--删除
useFrequentlyUl.addEventListener('touchend',function(ev){
  let target = ev.target;
  clearTimeout(timeOutEventDel);
  if(target.tagName === 'I'){ // 点击的是删除按钮
    if (timeOutEventDel != 0 && longClickDel == 0) { //点击
      //此处为点击事件----在此处添加跳转详情页
      useFrequentlyArr.length>0 && useFrequentlyArr.forEach((item,index)=>{
        if(item.num == target.attributes.markdel.value){
          useFrequentlyArr.splice(index, 1)
          renderHtml()
        }
      })
    }
    return false;
  }else {
    let elseLi;
    
    if(target.className.indexOf('js-icon-wrap') > -1){ //点击的是父容器
      elseLi = target.children;
    }else{ 
      elseLi = target.parentNode.parentNode.children;
    }

    for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
      if (elseLi[i].children[1]) {
        elseLi[i].classList.remove('shake');
        elseLi[i].children[1].classList.add('none');
        elseLi[i].children[1].classList.remove('block');
      }
    }
  }
  
})

function showOrHidDialog(type) {
  if(type === 'show'){
    dialog.classList.remove('none');
    dialog.classList.add('block');
  }else{
    dialog.classList.add('none');
    dialog.classList.remove('block');
  }
}

// 拖拽事件
var dragDom = document.getElementById('use-frequently-ul');
new Sortable(dragDom, {
  swapThreshold: 1,
  animation: 150,
  direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向)
  sort: true, // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
});