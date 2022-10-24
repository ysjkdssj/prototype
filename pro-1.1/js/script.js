// 메뉴 동작

$(".mainMenu").hover(
    function() {
        $(this).children(".subMenu").stop().slideDown("slow");
    },
    function() {
        $(this).children(".subMenu").stop().slideUp("fast");
    }
);

// 이미지 슬라이드 동작
var slide = $(".slide > img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide()", 3000); // 3초마다 모션함수 실행

// 모션함수
function autoslide() {
    
    // 첫번째 이미지 사라지기
    $(slide[sno]).stop().animate(
        {
            left: "100%"
        },
        1000,
        function() {
            $(this).css({
            
             left: "-100%"
            });
        }
    );

    // 나타날 이미지 카운트
    sno++;
    if(sno > eno) {
        sno = 0;
    }

    // 두번째 이미지 나타나기
    $(slide[sno]).stop().animate({
        left: "0"
    }, 1000);
};


// 첫번째 공지사항 클릭시 팝업창 표시
// 팝업창의 닫기 버튼 클릭해서 팝업창 닫기
var firstNotice = $(".notice li:nth-child(1)");
var popUp = $(".popUpBox");

// 팝업창 열기
firstNotice.click(function () {
    // 천천히 나타나게, 투명도 0.9
    popUp.fadeTo('slow', .9);  
});

// 팝업창 닫기
$(".popUpBox button").click(function (e) {
    popUp.fadeOut('fast');
});
