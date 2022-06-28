$(function(){
  $(".nav > li:nth-child(4)").mouseenter(function(){
    $(".skin_sub_Wrap").stop().slideDown("fast");
    $(".makeup_sub_Wrap").stop().slideUp("fast");
  });
  $(".off").click(function(){
    $(".skin_sub_Wrap").stop().slideUp("fast");
  });

  $(".nav > li:nth-child(5)").mouseenter(function(){
    $(".makeup_sub_Wrap").stop().slideDown("fast");
    $(".skin_sub_Wrap").stop().slideUp("fast");
  });
  $(".off").click(function(){
    $(".makeup_sub_Wrap").stop().slideUp("fast");
  });
  
  let bannerWd = $(".bannerimg_Group > li:first").width();
  $(window).resize(function(){
    bannerWd = $(".bannerimg_Group > li:first").width();
  })
  console.log(bannerWd)
  setInterval(function(){
    $(".bannerimg_Group").animate({"left":-bannerWd},500,function(){
      $(this).append($(".bannerimg_Group > li:first")).css("left",0);
    })
  },3000);
  
  //nav고정
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $(".nav_Wrap").addClass("on");
    }else{
      $(".nav_Wrap").removeClass("on");
    }
  });
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();//스크롤 이동값을 변수scroll에 할당
    var collectionTop = $(".makeUpCollection").offset().top-200;//worksTop변수에 .works의 top위치값을 저장

    if(scroll > collectionTop){//스크롤 이동값이 worksTop변수 값보다 클때
      $(".makeup_Group > li").addClass("on");//.member요소에 on클래스 추가
      $(".makeupcollection_Wrap").addClass("on");
    }else{
      $(".makeup_Group > li").removeClass("on");//.member요소에 on클래스 추가
      $(".makeupcollection_Wrap").removeClass("on");
    }
  });

})