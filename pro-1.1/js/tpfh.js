$(".mainMenu li").hover(
    function() {
        $(this).children(".subMenu").stop().slideDown("slow");
    },
    function() {
        $(this).children(".subMenu").stop().slideUp("fast");
    }
);
