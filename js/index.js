$(function () {
  theaMsForm($('.sign-in'));

  // 点击展开更多
  var flag = 1;//标记是否隐藏
  $(".open-more").on('click', '.open-more-btn', function () {

    if (!flag) {
      $('.show').slideUp("slow");
      $(this).find('span').text('展开更多').removeClass('hidden');
      flag = 1;
    } else {
      $('.show').slideDown("slow");
      $(this).find('span').text('点击隐藏').addClass('hidden');
      flag = 0;
    }
  })
  // 常见问题 展开与收起
  $('.question-page').on('click', '.list', function () {
    var $this = $(this).find('i');
    var $txt = $(this).find('.txt');
    var h = $txt.find('.txt-content').height();
    console.log(h)
    $this.toggleClass('closeUp');
    if (h > 48) {
      if ($this.hasClass('closeUp')) {
        $txt.height(h);
      } else {
        $txt.height('48px');
      }
    }
  })
  // 点击底部悬浮关闭按钮
  $('.footsusp').on('click', '.footsusp-close', function () {
    $(this).parents('.footsusp').hide();
    $('body').css('padding-bottom', '0px')
  })
  // 师资团队老师图像--首页
  $('.author').on('mouseover', 'li', function () {
    var index_ = $(this).index();
    $('.author-item').removeClass('show').eq(index_).addClass('show');
    $('.author-item').find('.content').hide().eq(index_).show();
    $('.author').find('li').removeClass('active').find('i').removeClass('active');
    $(this).addClass('active').find('i').addClass('active');
  })
  // 课程设置切换页
  $('.setting-nav').on('click', 'li', function () {
    var index_ = $(this).index();
    $('.setting-nav').find('li').removeClass('active').eq(index_).addClass('active');
    $(this).parents('.introduce').find('.detail').addClass('set-detail').eq(index_).removeClass('set-detail');
  })

  /* 回到顶部 */
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });

  
})

