$(document).ready(function(){

    // 페이지 로딩 시 제일 상단으로 스크롤 이동
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    $(window).on("scroll",function(){
        //변수 scroll에 현재 화면을 스크롤한 거리와 거리의 수치를 저장
        var scroll = $(this).scrollTop();

        // 5개 박스의 현재 z축 위치 값에서 현재 스크롤한 거리만큼을 더한 뒤 다시 대입
        // $("section>article").eq(0).css({"transform":"translateZ("+ (0+scroll) + "px"});
        // $("section>article").eq(1).css({"transform":"translateZ("+ (-5000+scroll) + "px"});
        // $("section>article").eq(2).css({"transform":"translateZ("+ (-10000+scroll) + "px"});
        // $("section>article").eq(3).css({"transform":"translateZ("+ (-15000+scroll) + "px"});
        // $("section>article").eq(4).css({"transform":"translateZ("+ (-20000+scroll) + "px"});
        for(var i=0; i<5; i++){
            $("section>article").eq(i).css({"transform":"translateZ("+ (-5000*i+scroll) + "px)"});
            console.log(i);
        };
      
        for(var i=0; i<5; i++){
            if(scroll>=i*5000-2500&&scroll<(i+1)*5000-2500){
                $(".scrollNavi li").removeClass();
                $(".scrollNavi li").eq(i).addClass("on");
                $("article").removeClass();
                $("article").eq(i).addClass("on");
            };
        };

    });

    $(".scrollNavi li").on("click", function(){
        var a = $(this).index();
        $("body,html").stop().animate({"scrollTop":5000*a}, 1500, "swing");
        console.log("clicked me");
    });

});
