/**
 * Created by hxsd on 2017/4/6.
 */
window.onload = function () {

    //top banner

    $('.top_banner .close').click(function () {
        $(this).parents('.top_banner').fadeOut();
    });
    //top banner over
    //header location

    $('header .location li').click(function () {
        $('header .location li.color').removeClass('color');
        $(this).addClass('color');

        $('#locTxt').text($(this).text());
    });

//    goTop


    let fixedFloor = $('.fixed_floor');
    let oTop = $('#goTop a');//a标签
    document.addEventListener('scroll', function () {//动态监听滚动事件
        if ($(window).scrollTop() > 200) {//动态获取滚动条位置，控制按钮出现
            oTop.parent().fadeIn();

//    fixed_search

            $('.fixed_search').fadeIn();

//    fixed_search over
        } else {
            oTop.parent().fadeOut();

//    fixed_search

            $('.fixed_search').fadeOut();

//    fixed_search over
        }

        //    fixed_floor
        if ($(window).scrollTop() > 800){
            fixedFloor.fadeIn();
        }else {
            fixedFloor.fadeOut();
        }
//    fixed_floor over
    });

    oTop.click(function () {//点击 返回顶部
        $(document.documentElement).animate({'scrollTop': '0'},1200);//IE
        $(document.body).animate({'scrollTop': '0'},1500);//谷歌
    });
    fixedFloor.find('li.goTop a').click(function () {//点击 返回顶部
        $(document.documentElement).animate({'scrollTop': '0'},1200);//IE
        $(document.body).animate({'scrollTop': '0'},1200);//谷歌
    });
//goTop over


//    good content
    let bannerCon = document.querySelector('.banner_content');
    let goodList = bannerCon.querySelectorAll('.banner_content dd');
    let aCon = bannerCon.querySelectorAll('.banner_content .good_content');

    for (let i = 0; i < goodList.length; i++) {
        goodList[i].onmouseover = function () {
            aCon[i].style.display = 'block';
        };
        goodList[i].onmouseout = function () {
            aCon[i].style.display = 'none';
        };
        aCon[i].onmouseover = function () {
            this.style.display = 'block';
        };
        aCon[i].onmouseout = function () {
            this.style.display = 'none';
        };
    }
//    good content over

//    banner_pic
    $(function () {
        let bannerBox = $('.main .banner_content .banner_pic');
        let aBanner = $('.main .banner_content .banner_pic a');
        let aIcon = $('.main .banner_content .banner_pic li');
        let pnArrow = $('.main .banner_content .banner_pic span');
        let prevArrow = $('.main .banner_content .banner_pic .prev');
        let nextArrow = $('.main .banner_content .banner_pic .next');
        aBanner.eq(0).css({'display': 'block'});
        aIcon.eq(0).addClass('icon_color');

        let imgKey = 0;
        let bannerTimer;

        function next() {
            imgKey++;

            if (imgKey > 7) {
                imgKey = 0;
            }
            aBanner.fadeOut(800);
            aBanner.eq(imgKey).fadeIn(800);

            aIcon.eq(imgKey).addClass('icon_color').siblings('li').removeClass('icon_color');
        }

        function prev() {
            imgKey--;
            if (imgKey < 0) {
                imgKey = 7;
            }
            aBanner.fadeOut(800);
            aBanner.eq(imgKey).fadeIn(800);

            aIcon.eq(imgKey).addClass('icon_color').siblings('li').removeClass('icon_color');
        }

        aIcon.click(function () {
            imgKey = $(this).index();

            aBanner.fadeOut(800);
            aBanner.eq(imgKey).fadeIn(800);

            aIcon.eq(imgKey).addClass('icon_color').siblings('li').removeClass('icon_color');
        });

        prevArrow.click(function () {
            prev()
        });
        nextArrow.click(function () {
            next()
        });

        bannerTimer = setInterval(next, 2000);

        bannerBox.hover(function () {
            pnArrow.fadeIn();
            clearInterval(bannerTimer);
        }, function () {
            pnArrow.fadeOut();
            clearInterval(bannerTimer);
            bannerTimer = setInterval(next, 2000);
        })
    });
//banner pic over

//banner right content
    let th = $('.main .banner_content .banner_right th');
    let border = $('.main .banner_content .banner_right th span.txt');
    let fly = $('.main .banner_content .banner_right .flyUp');
    let flyClose = $('.main .banner_content .banner_right .flyUp a.close');
    $(function () {
        fly.eq(0).css({'display': 'block'});

        let n = true;
        th.mouseenter(function () {
            let i = $(this).index();
            if (i == 3) {
                if (n) {
                    th.children('a').stop(true,false).animate({'top': '-38px'});
                    fly.stop(true,false).animate({'bottom': '96px'});

                    border.css({'border-top-color': '#fff'});
                    border.eq(i).css({'border-top-color': '#c81623'});

                    fly.css({'display': 'none'});
                    fly.eq(i).css({'display': 'block'});
                } else {
                    n = true
                }
            } else {
                th.children('a').stop(true,false).animate({'top': '-38px'});
                fly.stop(true,false).animate({'bottom': '96px'});

                border.css({'border-top-color': '#fff'});
                border.eq(i).css({'border-top-color': '#c81623'});

                fly.css({'display': 'none'});
                fly.eq(i).css({'display': 'block'});
                n = true;
            }
        });
        flyClose.click(function () {
            th.children('a').stop().animate({'top': '0'});
            fly.stop().animate({'bottom': '-182px'});
            border.css({'border-top-color': '#fff'});
            n = false;
        });
    });

//    banner right content over
//    banner right sec
    let secPayList = $('.main .banner_content .banner_right .flyUp ul.sec_pay_list li');
    fly.children('.sec_pay_content').eq(0).css({'display': 'block'});
    secPayList.mouseenter(function () {
        let i = $(this).index();
        $(this).parents('.sec_pay_list').find('.red').removeClass('red');
        $(this).children('a').addClass('red');

        $(this).parents('.flyUp').children('.sec_pay_content').css({'display': 'none'});
        $(this).parents('.flyUp').children('.sec_pay_content').eq(i).css({'display': 'block'});
    });
//    banner right sec over

//    you like
    $(function () {
        $('.main .you_like a.change').parents('.you_like').children('ul').eq(0).css({'display':'block'});
        let n =0;
        $('.main .you_like a.change').click(function () {
            n++;
            if (n>3){
                n=0
            }
            $(this).parents('.you_like').children('ul').eq(n).css({'display':'block'}).siblings('ul').css({'display':'none'});
        })
    });


//    .main .floor_content ul.floor_list li
    let floorCon = $('.main .floor_content');
    let floorList = $('.main .floor_content ul.floor_list li');

    for(let i =0;i<floorCon.length;i++){
        floorCon.eq(i).find('li').eq(0).children('a').css({'display':'block'});
        floorCon.eq(i).find('.content').eq(0).css({'display':'block'});
    }

    floorList.mouseenter(function () {
        let i = $(this).index();
        $(this).children('a').css({'display':'block'});
        $(this).siblings('li').children('a').css({'display':'none'});
        $(this).parents('.floor_content').find('.content').css({'display':'none'});
        $(this).parents('.floor_content').find('.content').eq(i).css({'display':'block'});
    });
    floorList.mouseleave(function () {

    });




//    楼层控制   到达对应楼层   icon变色
    document.addEventListener('scroll', function () {
        console.log(floorCon.eq(0).offset().top - $(window).scrollTop());
        for(let i =0;i<floorCon.length;i++) {
            let f_c_t = floorCon.eq(i).offset().top - $(window).scrollTop();
            if (f_c_t < 400 && f_c_t > 0) {
                floorCon.eq(i).find('h2').find('span').css({'background-position-y': '5px'});
                fixedFloor.children('li').eq(i).children('a').css({'background':'#c81623'})
            } else {
                floorCon.eq(i).find('h2').find('span').css({'background-position-y': '-30px'});
                fixedFloor.children('li').eq(i).children('a').css({'background':'#918888'})
            }
        }
    });

//    楼层控制   点击左侧icon   跳至相应楼层

    fixedFloor.children('li').click(function () {
        let i = $(this).index();
        if (i == 12)return;//返回顶部icon 不计算return
        let scrollLength = floorCon.eq(i).offset().top - 250;
        $(document.documentElement).animate({'scrollTop': scrollLength},1200);//IE
        $(document.body).animate({'scrollTop': scrollLength},1200);//谷歌
    });

};

//页面刷新事件
window.onbeforeunload = function () {
    $(window).scrollTop(0);//刷新页面滚动条默认顶部
};
