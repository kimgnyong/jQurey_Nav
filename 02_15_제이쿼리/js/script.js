$(function(){

    var obj = { // 변수 중복 피하기 위해 객체 방식 사용
        init:function(){
            this.section1('아규먼트 전달인자(변수)1');
            this.section2();
            this.section3('전달인자1',this.section1('아규먼트 전달인자(변수)1'));
        },
        section1:function(e){ // 파라미터(parameter : 매개변수)
            console.log('1번입니다.', e);
        },
        section2:function(){
            console.log('2번입니다.');
        },
        section3:function(pa1,pa2){
            pa2='ㅎㅇ';
            console.log('3번입니다.',pa1,pa2);
            this.section1('asdasd');
        }
    };
    //obj.init();

});

// 함수 표현식 : 즉시 실행 함수 표현식(IIFE)
// 제이쿼리 라이브러리 프로그램을 아규먼트로 전달해서
// 매개변수 $로 대입하여 사용하여 다른 라이브러리와 $ 사용 충돌을
// 피할수 있습니다.
;(function($,_,qwe){
    var a=100;
    var b; // 변수 값(value) 없으면 출력 할때 undefined
    console.log(a,b);
    console.log($,_,qwe);  // undefined 정의되지않은함수
})(jQuery,'전달인자2');// 아규먼트





//선언적함수
function1();
function function1() {
    console.log('선언적 함수 실행은 위 아래 어디든지 가능함');
};

//함수 표현식 리터럴 함수(익명함수)
// 함수 이름이 없는 함수
// 대신 변수를 사용하는 함수
//function2(); 함수선언 윗줄에서 선언하면 오류가뜸
var function2 = function() {
    console.log('리터럴함수 실행은 항상 함수 아래에서만 실행');
};
function2();

function1_ES6 = () => {
    console.log('ECAM_script6 에서부터 화살표함수 사용가능');
};
function1_ES6();


//즉시 실행 함수1
;(function(){
    console.log('즉시 실행 함수1');
})();

//즉시 실행 함수2
;(function(){
    console.log('즉시 실행 함수2');
}());

//즉시 실행 함수3 아규먼트와 매개변수 사용
;(function($){      //제이쿼리 라이브러리를 아규먼트로 전달
    console.log($); // 매개변수에서 $ 변수 사용
}(jQuery));         // 제이쿼리 라이브러리를 사용 가능하게 됩니다.
                    // 외부와 차단 $ 기호 충돌 피함



;(function($){
    $('#header')
        .html('<h1>헤더영역입니다.</h1>');
    $('#header h1')
        .css({color:'white',fontSize:60});


    $('#main')
        .html('<h1>메인영역입니다.</h1>');
    $('#main h1')
        .css({fontSize:100, color:'#f0f'});


    $('#footer')
        .html('<h1>푸터영역입니다.</h1>');
    $('#footer').html('');
})(jQuery);