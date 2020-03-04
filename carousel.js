function Carousel(carouselObj) {
    this.box = carouselObj.box;
    this.img = carouselObj.img;
    this.dots = carouselObj.dots;
    this.prev = carouselObj.prev;
    this.next = carouselObj.next;
    this.intervalTime = carouselObj.intervalTime;
    this.gradualTime = carouselObj.gradualTime;
    this.className = carouselObj.className;
    this.size = this.img.length;
    this.i = 0;
    // new时执行如下函数
    this.init();
    // 在setInterval和setTimeout中传入函数时，函数中的this会指向window对象
    // 这是由于setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。这会导致这些代码中包含的 this 关键字会指向 window (或全局)对象
    this.timer = setInterval(this.move.bind(this), this.intervalTime, 1);
}

Carousel.prototype = {

    move: function (n) {
        this.i += n;
        if (this.i == this.size) {
            this.i = 0;
        };
        if (this.i == -1) {
            this.i = this.size - 1
        };
        if (this.dots) {
            this.dots.eq(this.i).addClass(this.className).siblings().removeClass(this.className);
        }
        this.img.stop(false, true).eq(this.i).fadeIn(this.gradualTime).siblings().fadeOut(this.gradualTime);
    },

    init: function () {
        var _this = this;
        // 点击上下键
        if (this.prev) {
            this.prev.click(function () {
                _this.move(-1)
            });
        }
        if (this.next) {
            this.next.click(function () {
                _this.move(1)
            });
        }

        // mouseover每个小圆点
        if (this.dots) {
            this.dots.mouseover(function () {
                _this.i = $(this).index() - 1;
                // 因为执行move(1)时i会加1，所以先减一
                _this.move(1)
            });
        }


        // 进入时清楚计时器；离开时重启计时器
        this.box.hover(function () {
            clearInterval(_this.timer);
        }, function () {
            _this.timer = setInterval(_this.move.bind(_this), _this.intervalTime, 1);
        });

    }
}