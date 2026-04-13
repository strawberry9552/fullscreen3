$(function () {
  $("header li").on("click", function () {
    let i = $(this).index();
    console.log(i);
    $("#container")
      .stop()
      .animate({ "margin-top": `${i * -100}vh` });
    //높이가 100vh, 마진탑 -100vh씩 올리기.
  });
});
