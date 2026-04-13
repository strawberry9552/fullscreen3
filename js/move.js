$(function () {
  $("header li").on("click", function () {
    let lii = $(this).index();
    let si = $("section").eq(lii).offset().top;
    console.log(si);
    $("html, body").stop().animate({ scrollTop: si });
    $("#navi li").removeClass("navi_on");
    $("#navi li").eq(lii).addClass("navi_on");
  });
  $("#navi li").on("click", function () {
    let ni = $(this).index();
    let si2 = $("section").eq(ni).offset().top;
    $("html, body").stop().animate({ scrollTop: si2 });
    $("#navi li").removeClass("navi_on");
    $("#navi li").eq(ni).addClass("navi_on");
  });

  let p1 = $(".page1").offset().top;
  let p2 = $(".page2").offset().top;
  let p3 = $(".page3").offset().top;
  let p4 = $(".page4").offset().top;

  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    base = -100;
    if (sc >= p1 + base && sc < p2 + base) {
      $("#navi > li").removeClass("navi_on");
      $("#navi > li").eq(0).addClass("navi_on");
      $("section").removeClass("on");
      $(".page1").addClass("on");
    } else if (sc > p2 + base && sc < p3 + base) {
      $("#navi > li").removeClass("navi_on");
      $("#navi > li").eq(1).addClass("navi_on");
      $("section").removeClass("on");
      $(".page2").addClass("on");
    } else if (sc >= p3 + base && sc < p4 + base) {
      $("#navi > li").removeClass("navi_on");
      $("#navi > li").eq(2).addClass("navi_on");
      $("section").removeClass("on");
    } else {
      $("#navi > li").removeClass("navi_on");
      $("#navi > li").eq(3).addClass("navi_on");
      $("section").removeClass("on");
    }
  });
});
