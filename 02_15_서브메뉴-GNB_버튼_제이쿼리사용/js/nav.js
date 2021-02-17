;(function($,undefined){

var obj = {
    init:function(){
        this.headerFn();   
    },
    headerFn:function(){

        var $mainBtn = $('#nav .main-btn'); // 반드시 필요
                                          // 헤더영역안에서의 메인버튼
        var $sub = $('#nav .sub')
        var $navUl = $('#nav > ul')

    //네비게이션 이벤트 
    //GNB(메인메뉴) - 항상 전체 홈페이지에 노출되어있는 메뉴
    //LNB(서브메뉴) - 감추어진 메뉴 - 마우스 이벤트에 의해서 노출되는 메뉴
    //메인메뉴의 마우스 오버시(mouseenter 버튼 리스너 이벤트)
    //메인메뉴 바로 아래(next()) 해당 서브메뉴는 아래로 부드럽게 펼쳐진다.(slideDown() 메소드)

    

    //객체 배열처리 : 자바스크립트 ( forEach(); ) el , idx , arr
    //객체 배열처리 : 제이쿼리 ( each(); )  idx , el
    //mainBtn 4개를 배열처리
    $mainBtn.each(function(idx){
        $(this).on({
            mouseenter:function(event) {
                event.preventDefault();
                $sub.stop().slideUp(200);  // .stop() 메서드를 슬라이드 업,다운 바로 전에 써주면
                $(this).next().stop().slideDown(300);   // 버블링현상을 없엘수 있음. ( 중요 )
                $mainBtn.removeClass('on');    // $(this)를 사용하면 해당 클래스를 삭제하고 추가하기때문에 결국은 추가하고 끝이남
                $(this).addClass('on');
            },
            focusin:function(event){
                event.preventDefault();
                $sub.stop().slideUp(200);
                $(this).next().stop().slideDown(300);
                $mainBtn.removeClass('on'); // 모든 메인버튼 클래스 제거
                $(this).addClass('on');    // 클래스 추가
            }

        
        });
    }, false)


    /*
        $mainBtn.eq(0).on({
            mouseenter:function(event) {
                event.preventDefault();
                $('.sub').stop().slideUp(200);  // .stop() 메서드를 슬라이드 업,다운 바로 전에 써주면
                $(this).next().stop().slideDown(300);   // 버블링현상을 없엘수 있음. ( 중요 )
            }
        });
        $mainBtn.eq(1).on({
            mouseenter:function(event){
                event.preventDefault();
                $('.sub').stop().slideUp(200);
                $(this).next().stop().slideDown(300);
            }
        });
        $mainBtn.eq(2).on({
            mouseenter:function(event){
                event.preventDefault();
                $('.sub').stop().slideUp(200);
                $(this).next().stop().slideDown(300);
            }
        });
        $mainBtn.eq(3).on({
            mouseenter:function(event){
                event.preventDefault();
                $('.sub').stop().slideUp(200);
                $(this).next().stop().slideDown(300);
            }
        });
    */
        //마우스가 #nav 영역을 떠나면 (00mouseleave)해라
        // 모든 서브메뉴는 접힌다.(slideUp(300))
        $navUl.on({
            mouseleave:function(event) {
                event.preventDefault();
                $sub.stop().slideUp(200)
                $mainBtn.removeClass('on');
            }
        });
    }
};
obj.init();


})(jQuery);