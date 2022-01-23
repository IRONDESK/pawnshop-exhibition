
$(function(){

//변수 ht에 브라우저 높이 값을 저장
    var ht= $(window).height();
    //브라우저의 높이값을 section의 높이 값으로 지정
    $("section").height(ht);
    //브라우저가 리사이즈될 때마다 브라우저와 section의 높이 값을 갱신
    $(window).on("resize", function(){
        var ht=$(window).height();
        $("section").height(ht);
    });
    //마우스의 움직임에 반응하는 서브 이미지 설정하기
    $("section").on("mousemove", function(e){
        //변수 posX에 마우스 커서의 x축 위치 저장
        var posX=e.pageX;
        //변수 posY에 마우스 커서의 y축 위치 저장
        var posY=e.pageY;

        //첫번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $(".p11").css({"right":20-(posX/30), "bottom":20-(posY/30)});
        $(".p12").css({"right":130+(posX/20), "bottom":40-(posY/30)});
        $(".p13").css({"right":60+(posX/20), "top":180+(posY/20)});
        
        //두번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $(".p21").css({"right":-180-(posX/30), "bottom":-480-(posY/30)});
        $(".p22").css({"right":130+(posX/50), "bottom":40-(posY/50)});
        
         //세번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
         $(".p31").css({"right":280-(posX/30), "bottom":30-(posY/30)});
         $(".p32").css({"right":110+(posX/20), "bottom":-270+(posY/20)});
         $(".p33").css({"right":-70+(posX/20), "bottom":-130+(posY/20)});

          //네번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $(".p41").css({"right":20-(posX/30), "bottom":20-(posY/30)});
        $(".p42").css({"right":130+(posX/20), "bottom":40-(posY/30)});
    });
    
    //주메뉴 클릭시, 자동으로 상하 스크롤시키기
    $("#menu li").on("click", function(e){
        e.preventDefault(); //a요소가 클릭시 링크가 동작해 깜빡이는 것을 막아줌.
        //변수 ht에 브라우저의 높이 값 저장
        var ht=$(window).height();
        
        //변수 i에 현재 클릭한 li의 순서값을 지정
        var i=$(this).index();

        //브라우저의 높이 값*박스의 순서값은 현재 박스의 스크롤 위치 값과 동일
        var nowTop = i*ht;

        //해당 스크롤의 위치 값으로 문서를 이동
        $("html,body").stop().animate({"scrollTop":nowTop}, 1400);
    });})