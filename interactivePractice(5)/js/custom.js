$(document).ready(function(){

    // 마우스 오버 시
    $("article").on("mouseenter",function(){

        // 변수 vid에 video 파일 참조
        var vid = $(this).find("video").get(0);
        // 동영상의 재생 위치를 처음(0)으로 설정
        vid.cureentTime=0;
        // 동영상을 재생
        vid.play();
        console.log(vid)

        $(this).stop().animate({"width":"35%"}, 1000, function(){;
            // article이 넓어진 바로 뒤에 아래 구문이 실행됩니다.
            $(this).find("h3").stop().animate({"right":"10px"}, 400);
            $(this).find("p").stop().animate({"right":"10px"}, 800);
        });
    $(this).find("video").stop().animate({"opacity":"0.9"}, 1200);
    });

    // 마우스 아웃 시
    $("article").on("mouseleave",function(){

        // 변수 vid에 video 파일 참조
        var vid = $(this).find("video").get(0);
        // 동영상을 정지
        vid.pause();

        $(this).stop().animate({"width":"12%"}, 700);
        $(this).find("video").stop().animate({"opacity":"0"}, 2000);
        $(this).find("h3").stop().animate({"right":"-310px"}, 200);
        $(this).find("p").stop().animate({"right":"-310px"}, 500);

    });

});
