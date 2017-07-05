/**
 * Created by chaves on 2017/4/28.
 */
window.onload = function () {
//header location

    $('header .location li').click(function () {
        $('header .location li.color').removeClass('color');
        $(this).addClass('color');

        $('#locTxt').text($(this).text());
    });

    //    goTop

    let oTop = $('#goTop a');//a标签
    document.addEventListener('scroll', function () {//动态监听滚动事件
        if ($(window).scrollTop() > 200) {//动态获取滚动条位置，控制按钮出现
            oTop.parent().fadeIn();
        } else {
            oTop.parent().fadeOut();
        }
    });

    oTop.click(function () {//点击 返回顶部
        $(document.documentElement).animate({'scrollTop': '0'}, 1200);//IE
        $(document.body).animate({'scrollTop': '0'}, 1500);//谷歌
    });
//goTop over

    //    good content
    let item = document.querySelector('.item');
    let allGoods = document.querySelector('.all_goods_list');
    let goodTitle = document.querySelector('.all_goods_list dt');
    let goodList = document.querySelectorAll('.all_goods_list dd');
    let aCon = document.querySelectorAll('.good_content');

    goodTitle.onmouseenter = function () {
        console.log(123);
        for (let i = 0; i < goodList.length; i++) {
            goodList[i].style.display = 'block';
            goodList[i].onmouseenter = function () {
                for (let j = 0; j < goodList.length; j++) {
                    goodList[j].style.display = 'block';
                }
            }
        }
    };
    allGoods.onmouseleave = function () {
        for (let i = 0; i < goodList.length; i++) {
            goodList[i].style.display = 'none';
        }
    };
    for (let i = 0; i < goodList.length; i++) {
        goodList[i].onmouseover = function () {
            aCon[i].style.display = 'block';
        };
        goodList[i].onmouseout = function () {
            aCon[i].style.display = 'none';
        };
        aCon[i].onmouseover = function () {
            this.style.display = 'block';
            for (let i = 0; i < goodList.length; i++) {
                goodList[i].style.display = 'block';
            }
        };
        aCon[i].onmouseout = function () {
            this.style.display = 'none';
            for (let i = 0; i < goodList.length; i++) {
                goodList[i].style.display = 'none';
            }
        };
    }
//    good content over

    //放大镜
    let $mask = $('.item .item_con .pic_area .bigPic .mask');
    let $picBox = $('.item .item_con .pic_area .bigPic');
    let $scalePic = $('.item .item_con .pic_area .scalePic img');
    let $scaleBox = $('.item .item_con .pic_area .scalePic');
    MyWidget.tbDrag($mask.get(0), $picBox.get(0), $scalePic.get(0), $scaleBox.get(0));

    //模拟商品数据
    let goodData = [
        {
            title: '【京东超市】妈咪宝贝 (MamyPoko)婴儿小内裤电商箱装大号尿不湿 【男】 L160片【9-14kg】',
            description: '【京东自营】尤妮佳出品，潮宝爱炫“裤”，穿脱更方便！更有百变专属图案设计，变身时尚小帅男~~',
            price: '￥179.00',
            assessment: '2453489',
            bigPicArr: [
                {src: 'baby1.jpg'},
                {src: 'baby2.jpg'},
                {src: 'baby3.jpg'},
                {src: 'baby4.jpg'},
                {src: 'baby5.jpg'},
                {src: 'baby6.jpg'}
            ],
            smallPicArr: [
                {src: 'babysmall1.jpg'},
                {src: 'babysmall2.jpg'},
                {src: 'babysmall3.jpg'},
                {src: 'babysmall4.jpg'},
                {src: 'babysmall5.jpg'},
                {src: 'babysmall6.jpg'}
            ]
        },
        {
            title: '【京东超市】妈咪宝贝 (MamyPoko) 婴儿小内裤电商箱装大号尿不湿 【女】 L160片【9-14kg】',
            description: '【京东自营】尤妮佳出品，潮宝爱炫“裤”，穿脱更方便！更有百变专属图案设计，变身时尚小萌妹~~',
            price: '￥168.00',
            assessment: '1673709',
            bigPicArr: [
                {src: 'pinkbaby1.jpg'},
                {src: 'pinkbaby2.jpg'},
                {src: 'pinkbaby3.jpg'},
                {src: 'pinkbaby4.jpg'},
                {src: 'pinkbaby5.jpg'},
                {src: 'pinkbaby6.jpg'}
            ],
            smallPicArr: [
                {src: 'pinkbabysmall1.jpg'},
                {src: 'pinkbabysmall2.jpg'},
                {src: 'pinkbabysmall3.jpg'},
                {src: 'pinkbabysmall4.jpg'},
                {src: 'pinkbabysmall5.jpg'},
                {src: 'pinkbabysmall6.jpg'}
            ]
        }
    ];

    let $goodTitle = $('.item .item_con div.description p.title');
    let $goodDescription = $('.item .item_con div.description p.description');
    let $picListLi = $('.item .item_con .pic_area .smallPic .pic_list li');
    let $price = $('.item .item_con div.description div.price p.price strong');
    let $assessment = $('.item .item_con div.description div.price div.assessment span.assessmentNum');

//    白条分期
    let $loanLi = $('.item .item_con div.description .loan li');
    let $addLoan = $('.item .item_con div.description .buy a.addLoan');
    //选择白条分期，显示打白条按钮
    $loanLi.click(function () {
        if ($(this).hasClass('color')){
            $(this).removeClass('color');
            $addLoan.hide();
        }else {
            $(this).addClass('color').siblings().removeClass('color');
            $addLoan.show();
        }
    });
    //点击打白条按钮
    $addLoan.click(function () {
        alert('分期付款成功');
    });
    //默认获取的数据
    getData(goodData[0]);
    //获取数据
    function getData(data) {
        $goodTitle.text(data.title);
        $goodDescription.text(data.description);
        $price.text(data.price);
        $assessment.text(data.assessment);
        $picListLi.each(function (i) {
            $picListLi.eq(i).children('img').attr('src', 'images/' + data.smallPicArr[i].src)
        });
        $picListLi.eq(0).addClass('color').siblings().removeClass('color');
        $picBox.find('img').attr('src', 'images/' + data.bigPicArr[0].src);
        //悬停换图
        $picListLi.mouseenter(function () {
            let i = $(this).index();
            $(this).addClass('color').siblings().removeClass('color');
            $picBox.find('img').attr('src', 'images/' + data.bigPicArr[i].src);
        });
        //模拟分期付款计算利息方法
        let money = $price.text().substr(1);
        $loanLi.each(function (i) {
            //打白条默认不选中
            $loanLi.eq(i).removeClass('color');
            if (i>0){
                let stage = Math.pow(2,i-1);
                let loanMoney = (parseFloat(money)+20*i)/(3*stage);
                $loanLi.eq(i).children('a').text('￥'+loanMoney.toFixed(2)+'×'+(3*stage)+'期');
            }
        });
        //打白条按钮默认隐藏
        $addLoan.hide();
    }

    //点击
    let pic_list = $('.item .item_con .pic_area .smallPic .pic_list ul');
    let $aPrev = $('.item .item_con .pic_area .smallPic a.prev');
    let $aNext = $('.item .item_con .pic_area .smallPic a.next');
    let key = 0;
    $aPrev.click(function () {
        key--;
        if (key >= 0) {
            pic_list.stop().animate({'margin-left': -56 * key});
        } else {
            key = 0;
        }
    });
    $aNext.click(function () {
        key++;
        if (key <= pic_list.children('li').length - 5) {
            pic_list.stop().animate({'margin-left': -56 * key});
        } else {
            key = pic_list.children('li').length - 5;
        }
    });


//    服务
    let $buyTime = $('.item .item_con div.description div.service p.time');
    let date = new Date();
    if (date.getHours() < 11) {
        $buyTime.text('11:00前下单,预计下午送达')
    } else if (date.getHours() < 15) {
        $buyTime.text('15:00前下单,预计今晚送达')
    } else {
        $buyTime.text('23:00前下单,预计明天送达')
    }
//    选择尺码
    let $chooseLi = $('.item .item_con div.description .choose li');
    $chooseLi.eq(0).children('a').addClass('color');
    $chooseLi.click(function () {
        let i = $(this).index();
        $chooseLi.children('a').removeClass('color');
        $(this).children('a').addClass('color');
        //获取相应数据
        getData(goodData[i]);
    });

//    购买数量
    let $numInput = $('.item .item_con div.description .buyNum input');
    let $more = $('.item .item_con div.description .buyNum .more');
    let $less = $('.item .item_con div.description .buyNum .less');
    let num = 1;
    if (num===1){
        $less.attr('disabled',true).css('cursor','not-allowed');
    }else {
        $less.attr('disabled', false).css('cursor', 'default');
    }
    $more.click(function () {
        num++;
        $numInput.val(num);
        //数量变更，再次计算分期利息
        let money = $price.text().substr(1);
        $loanLi.each(function (i) {
            if (i>0){
                let stage = Math.pow(2,i-1);
                let loanMoney = (parseFloat(money)*num+20*i)/(3*stage);
                $loanLi.eq(i).children('a').text('￥'+loanMoney.toFixed(2)+'×'+(3*stage)+'期');
            }
        });
        if (num>1){
           $less.attr('disabled', false).css('cursor', 'default');
        }
    });
    $less.click(function () {
        num--;
        $numInput.val(num);
        //数量变更，再次计算分期利息
        let money = $price.text().substr(1);
        $loanLi.each(function (i) {
            if (i>0){
                let stage = Math.pow(2,i-1);
                let loanMoney = (parseFloat(money)*num+20*i)/(3*stage);
                $loanLi.eq(i).children('a').text('￥'+loanMoney.toFixed(2)+'×'+(3*stage)+'期');
            }
        });
        if (num===1){
            $less.attr('disabled',true).css('cursor','not-allowed');
        }
    });
    //手动输入数量
    $numInput.keyup(function () {
        if (/[^0-9]/.test($(this).val())){
             $(this).val('1');
            num=1;
        }else {
            num = $(this).val();
        }
    });

//    购物车
    let $addCar = $('.item .item_con div.description .buy a.addCar');
    $addCar.click(function () {
        alert('已加入购物车');
    });

//    配送地址
    let $location_con = $('.item .item_con div.description div.location div.location_select .location_con');
    let $location_con_white = $('.item .item_con div.description div.location div.location_select .location_con .white');
    let $location_text = $('.item .item_con div.description div.location div.location_select');
    $location_con_white.css({'width':$location_text.outerWidth()});
    $location_text.hover(function () {
        $location_con.show();
        $location_con_white.css({'width':$location_text.outerWidth()});
    },function () {
        $location_con.hide();
    });
//    模拟地址数据
    let locationData = [
        {
            title:'上海',
            value:{
                '徐汇区':['城区','某某街道'],
                '静安区':['城区','某某街道'],
                '黄浦区':['城区','某某街道'],
                '浦东新区':['城区','某某街道'],
                '杨浦区':['城区','某某街道']
            }
        },
        {
            title:'北京',
            value:{
                '海淀区':['城区','某某街道'],
                '朝阳区':['城区','某某街道'],
                '东城区':['城区','某某街道'],
                '西城区':['城区','某某街道'],
                '丰台区':['城区','某某街道']
            }
        },
        {
            title:'深圳',
            value:{
                '罗湖区':['城区','某某街道'],
                '福田区':['城区','某某街道'],
                '南山区':['城区','某某街道'],
                '宝安区':['城区','某某街道'],
                '龙岗区':['城区','某某街道'],
                '盐田区':['城区','某某街道']
            }
        }
    ];
    let $location_con_p = $('.item .item_con div.description div.location div.location_select .location_con p');
    let $location_con_ul = $('.item .item_con div.description div.location div.location_select .location_con .location_sel');
    let locationFlag = true;
    $location_con_p.click(function () {
        if (locationFlag){
            $location_con_ul.hide();
            $location_con_p.children('i').css({'transform':'rotate(0)'});
        }else {
            $location_con_p.children('i').css({'transform':'rotate(180deg)'});
            $location_con_ul.show();
        }
        locationFlag=!locationFlag;
    });
    let $location_con_list = $('.item .item_con div.description div.location div.location_select .location_con ul.list li');
    let $location_con_sel = $('.item .item_con div.description div.location div.location_select .location_con ul.location_select_con');
    $location_con_list.eq(0).children().addClass('color');
    $location_con_sel.eq(0).show();
    //解析数据
    for (let i=0;i<locationData.length;i++){
        $location_con_sel.eq(0).append('<li><a href="javascript:;">'+locationData[i].title+'</a></li>');
    }
    //选择城市
    $location_con_sel.eq(0).children('li').click(function () {
        let i = $(this).index();
        $location_con_list.children().text('请选择');
        $location_con_list.eq(0).children().text($(this).children().text());
        $location_con_list.children().removeClass('color');
        $location_con_list.eq(1).children().addClass('color');
        $(this).parent().hide().next().show();
        //解析
        let valueIndex = [];
        let value = locationData[i].value;
        $location_con_sel.eq(1).empty();
        for (let key in value){
            $location_con_sel.eq(1).append('<li><a href="javascript:;">'+key+'</a></li>');
            valueIndex.push(key);
        }
        //城市分区
        $location_con_sel.eq(1).children('li').click(function () {
            let i = $(this).index();
            $location_con_list.eq(1).children().text($(this).children().text());
            $location_con_list.children().removeClass('color');
            $location_con_list.eq(2).children().addClass('color');
            $(this).parent().hide().next().show();
            $location_con_sel.eq(2).empty();
            for (let k =0;k<value[valueIndex[i]].length;k++){
                $location_con_sel.eq(2).append('<li><a href="javascript:;">'+value[valueIndex[i]][k]+'</a></li>');
            }
            //街道
            $location_con_sel.eq(2).children('li').click(function () {
                $location_con_list.eq(2).children().text($(this).text());
                $location_con.hide();
                let txt ='';
                $location_con_list.each(function (i) {
                    txt+=$location_con_list.eq(i).children().text()+',';
                });
                $location_text.children('span').text(txt);
            })
        });
    });


    $location_con_list.click(function () {
        let i = $(this).index();
        $location_con_list.children().removeClass('color');
        $(this).children().addClass('color');
        $location_con_sel.hide();
        $location_con_sel.eq(i).show();
    });
};