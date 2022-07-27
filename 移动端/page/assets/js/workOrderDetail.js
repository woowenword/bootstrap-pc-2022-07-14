// tooltip
$(function () {
    $(".tab a").click(function () {
        $(".tab i").stop().animate({ "left": ($(this).index()) * $(this).width() }, 800)
    })
    $(".li-radio input").click(function () {
        console.log($(this).val())
    })
    $(".folded-panel .content-wrap p").click(function () {
        var topVal = $(".folded-panel .content-wrap").css("top");
        if (topVal === "0px") {
            $(".folded-panel .content-wrap").stop().animate({ "top": "-178rem" }, 800);
            return
        }
        $(".folded-panel .content-wrap").stop().animate({ "top": "-0" }, 800)
    })
    $(".comment .reply").click(function () {
        $(this).parents(".div-right").find(".div-right-text ul").toggle();
    })
    $("#btn-tool").click(function () {
        $(".btn-tool ul").toggle();
    })
    var _x_start, _y_start, _x_move, _y_move, _x_end, _y_end, left_start, top_start;
    // 按下
    document.getElementById("btn-tool").addEventListener("touchstart", function (e) {
        _x_start = e.touches[0].pageX; // 起始点击位置
        _y_start = e.touches[0].pageY; // 起始点击位置
        left_start = $("#btn-tool").css("left"); // 元素左边距
        top_start = $("#btn-tool").css("top"); // 元素上边距
    });
    // 移动
    document.getElementById("btn-tool").addEventListener("touchmove", function (e) {
        e.preventDefault(); // 取消事件的默认动作。
        _x_move = e.touches[0].pageX; // 当前屏幕上所有触摸点的集合列表
        _y_move = e.touches[0].pageY; // 当前屏幕上所有触摸点的集合列表
        // 左边距=当前触摸点-鼠标起始点击位置+起始左边距
        $("#btn-tool").css("left", parseFloat(_x_move) - parseFloat(_x_start) + parseFloat(left_start) + "px");
        // 上边距=当前触摸点-鼠标起始点击位置+起始上边距
        $("#btn-tool").css("top", parseFloat(_y_move) - parseFloat(_y_start) + parseFloat(top_start) + "px");
    });
    //松开
    document.getElementById("btn-tool").addEventListener("touchend", function (e) {
        var bodyW = $(window).width() / 2; // 屏幕宽的一半
        var bodyH = $(window).height(); // 屏幕高
        var _x_end = e.changedTouches[0].pageX; // 松开位置
        var _y_end = e.changedTouches[0].pageY; // 松开位置
        var divH = $("#btn-tool").height(); // 元素高
        var divW = $("#btn-tool").width(); // 元素宽
        // 当最终位置在屏幕左半部分
        if (_x_end < bodyW) {
            $("#btn-tool").css("left", "0px");
        } else if (_x_end >= bodyW) { // 当最终位置在屏幕左半部分
            $("#btn-tool").css("left", $(window).width() - parseFloat(divW))
        }
        // 当元素顶部在屏幕外时
        if (parseFloat($("#btn-tool").css("top")) < 0) {
            // 置于顶部
            $("#btn-tool").css("top", 0); // 置于顶部
        }
        // 当元素底部在屏幕外时
        if (bodyH - _y_end < parseFloat(divH) / 2) {
            // 置于底部
            $("#btn-tool").css("top", bodyH - parseFloat(divH))
        }
    });

})
