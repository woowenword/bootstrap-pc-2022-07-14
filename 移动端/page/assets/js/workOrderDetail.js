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
    // $(".btn-tool").click(function () {
    //     $(".btn-tool ul").toggle();
    // })
    var startPosition, endPosition, deltaX;
    $(".btn-tool").on({
        touchstart: function (ev) {
            //长按触发事件
            timeOutEvent = setTimeout(function () {
                timeOutEvent = 0;
                var e = ev || window.event;
                var element = e.originalEvent.targetTouches[0];
                this.source.client = {
                    x: element.clientX,
                    y: element.clientY
                }
            }, 1000)
        },
        touchmove: function (e) {
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
            var e = e || window.event;
            // e.preventDefault();
            console.log(e)
            var element = e.originalEvent.targetTouches[0];
            let x = element.clientX - this.source.client.x
            let y = element.clientY - this.source.client.y
            // 移动当前元素
            element.target.style.cssText = `transform: translate(${x}px, ${y}px);`
        },
        touchend: function (e) {
            clearTimeout(timeOutEvent);
            if (timeOutEvent != 0) {
                $(".btn-tool ul").toggle();
            }else{
                e.target.style.cssText = `transform: none;`
            }
            return false;
        }
    });
})
