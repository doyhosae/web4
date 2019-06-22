$(document).ready(function(){

    var numAc = $("article").length;

    var widSec = 200*numAc;

    var widTotal = widSec+600;

    $("section").width(widTotal);

    $("body").height(widSec);

    $('html,body').scrollTop(widSec);

    // 브라우저를 스크롤할 때
    $(window).on("scroll", function(){
        // 변수 scroll에 현재 스크롤한 만캄의 거리를 저장
        var scroll = $(this).scrollTop();
        // section의 left 값을 스크롤한 거리만큼 마이너스 값으로 이동
        $("section").stop().animate({"left":-scroll},600);
    });

    // 해당 article를 클릭 했을 때
    $("article").on("click", function(e){
        e.preventDefault();

        var index = $(this).index();

        var posAc = 200*index;

        $("article").removeClass('on');

        $(this).addClass('on');

        $("html,body").scrollTop(posAc);
    });

// #navi li를 클릭 했을 때
$("#navi li").on("click",function(){
    var i = $(this).index();
    var posNavi = 1000*i;
    $("#navi li, article").removeClass();
    $(this).addClass("on");
    $("html,body").scrollTop(posNavi);
});
});
