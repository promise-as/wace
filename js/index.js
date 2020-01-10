/*author : yrw*/
$('.teacheraInfo .content').niceScroll({
    cursorcolor: "#ff8838",//#CC0071 光标颜色
    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "3px", //像素光标的宽度
    cursorborder: "0", // 游标边框css定义
    cursorborderradius: "2px",//以像素为光标边界半径
    autohidemode: false //是否隐藏滚动条
});

$(function () {
    // 点击展开更多
    var flag =1;//标记是否隐藏
    $(".open-more").on('click','.open-more-btn',function () {
        
        if (!flag) {
            $('.show').slideUp("slow");
            $(this).find('span').text('展开更多').removeClass('hidden');
            flag=1;
        } else {
            $('.show').slideDown("slow");
            $(this).find('span').text('点击隐藏').addClass('hidden');
            flag=0;
        }
    })
    // 常见问题 展开与收起
    $('.question-page').on('click','.list',function () {
        var $this=$(this).find('i');
        var $txt=$(this).find('.txt');
        var h=$txt.find('.txt-content').height();
        console.log(h)
        $this.toggleClass('closeUp');
        if (h>48) {
            if ($this.hasClass('closeUp')) {
                $txt.height(h);
            } else {
                $txt.height('48px');
            }
        }
    })
    // 点击底部悬浮关闭按钮
    $('.footsusp').on('click','.footsusp-close',function () {
        $(this).parents('.footsusp').hide();
        $('body').css('padding-bottom','0px')
    })
    // 师资团队老师图像--首页
    $('.author').on('mouseover','li', function () {
        var index_=$(this).index();
        $('.author-item').removeClass('show').eq(index_).addClass('show');
        $('.author-item').find('.content').hide().eq(index_).show();
        $('.author').find('li').removeClass('active').find('i').removeClass('active');
        $(this).addClass('active').find('i').addClass('active');
    })
    // 课程设置切换页
    $('.setting-nav').on('click','li',function () {
        var index_=$(this).index(); 
        $('.setting-nav').find('li').removeClass('active').eq(index_).addClass('active');
        $(this).parents('.introduce').find('.detail').addClass('set-detail').eq(index_).removeClass('set-detail');
    })
})

