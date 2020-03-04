
$(function () {
    // 显示“回顶部点击框”
    if ($(this).scrollTop() > 1000) {
        $(".tally").css("display", "block")
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $(".tally").fadeIn(200)
        } else {
            $(".tally").fadeOut(200)
        }
    })
    // 点击回顶部
    $(".tally .backtop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500)
    })

    // 带渐变的hover切换
    function gradiendSwitch(focusEle, showEle, className, time) {
        focusEle.mouseenter(function () {
            if ($(this).hasClass(className)) {
                return;
            }
            
            var index = $(this).index();
            focusEle.siblings("." + className).removeClass(className);
            $(this).addClass(className);
            // 如果传了参数time就渐变
            if (time) {
                showEle.siblings("." + className).stop(true).fadeOut(time);
            }
            showEle.siblings("." + className).removeClass(className);
            showEle.eq(index).addClass(className);
            if(time){
                showEle.eq(index).stop(true).fadeIn(time);
            }
            
        })
    }

    gradiendSwitch($(".eval .avatar li"), $(".eval .eval-text li"), "active");
    gradiendSwitch($(".company-container .company-type li"), $(".company-container .company-list"), "active", 1000)
    gradiendSwitch($(".recommend .recommend-nav li"), $(".recommend .link-list .link-item"), "active")


    // 自动轮播图
    var carouselObj = new Carousel({
        box: $('.banner-box'),
        img: $('.banner-box .slide-img'),
        dots: $('.banner-box .banner-point a'),
        // prev: $(".carousel .banner-con .prev"),
        // next: $(".carousel .banner-con .next"),
        intervalTime: 3000,
        gradualTime: 600,
        className:"active",
    })




    $(".recommend .title").click(function () {
        $(this).toggleClass("active");
        $(".recommend .recommend-box").toggleClass("active")
    })



    // 滚动固定顶部搜索栏
    $(window).scroll(function () {
        if ($(this).scrollTop() > 448) {
            if ($(".topbar").hasClass("fixed")) return;
            $(".topbar").addClass("fixed");
        } else {
            if (!$(".topbar").hasClass("fixed")) return;
            $(".topbar").removeClass("fixed");
        }
    })


})
