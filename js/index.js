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
    // console.log(h)
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


  // 展开与收起
  /**
   * tabClass1: 内容的类
   * tabClass2: 按钮的类
   */
  function foldUp(parentEle, clickEle, contEle, tabClass1, tabClass2) {
    $(parentEle).find(clickEle).click(function () {
      $(this).toggleClass(tabClass1);
      // 有down类就是收起状态
      $(this).hasClass('down') ? $(this).html('<span>收起</span>') : $(this).html('<span>展开</span>');
      $(this).parent().find(contEle).toggleClass(tabClass2);
    });
  }
  // 常见问题
  foldUp('.issue-list li', '.fold', '.item-d', 'down', 'show');
  // 师资团队
  foldUp('.teacher-list .item-l', '.fold', '.l-text', 'down', 'show');

  function tabHandle(headEle, contEle, className) {
    $(headEle).each(function (i) {
      $(this).click(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(contEle)[i]).addClass(className).siblings().removeClass(className);
      })
    })
  }
  // 课程设置
  tabHandle('.setting-nav li', '.introduce .detail', 'active');
  // 关于我们
  tabHandle('.sc-head li', '.sc-cont .cont-item', 'cur');
  // 学校首页
  tabHandle('.tab-head li', '.tab-detail li', 'cur');
  // 获取开放日
  tabHandle('.radio span', null, 'sel');
  $('#sex').val($('.radio .sel').text());

  /* 回到顶部 */
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
})

