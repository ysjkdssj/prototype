// 메뉴

$(".mainMenu").hover(
    function() {
        $(this).children(".subMenu").stop().slideDown("slow");
    },
    function() {
        $(this).children(".subMenu").stop().slideUp("fast");
    }
);