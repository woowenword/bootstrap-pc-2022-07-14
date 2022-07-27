$(function () {
    $('#workOderList').click(function(){
        window.location.href = 'workOrderList.html'
    })
    $('#home').click(function(){
        window.location.href = 'index.html'
    })
    var ulLiLength = $(".tab ul li");
    var ulWidth = 0;
    for(var i = 0; i < ulLiLength.length; i++){
        ulWidth += ($(ulLiLength[i]).width() + Number($(ulLiLength[i]).css("marginRight").replace('px', '')))
        console.log(ulWidth)
    }
    $(".tab ul").width(ulWidth + ulLiLength.length)

    var liOneOffsetLeft = $(".tab ul li:first").offset().left + $(".tab ul li:first").width();
    var offsetValue = ($(".tab ul li:nth-child(2)").offset().left - liOneOffsetLeft) / 2;
    $(".tab i").width($(".tab ul li:first").width());
    $(".tab ul li").click(function () {
        $(".tab i").stop().animate({ "width": $(this).width() }, 0);
        $(".tab i").stop().animate({ "left": $(this).offset().left - offsetValue }, 800);
        $(".form ul").eq($(this).index()).addClass("ul-active").siblings().attr("class", "");
    })
})
