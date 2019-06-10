$(document).ready(function(){

// nav 버튼 클릭 시 화면 테바 변경
  $("nav li").on("click", function(){

    var className = $(this).children("a").text();
    $("nav li").removeClass();
    $(this).addClass("on");
    $("#wrap").removeClass();
    $("#wrap").addClass(className);

  })
});
