$(document).ready(function () {
    $(".btn").click(function (e) {
        $(".menu").animate({
            left: "+=" + $(".menu").width(),
            opacity: 0.6,
        }, 400, function () {
            $(".menu-item:first-child").animate({
                left: "110%",
                opacity: 1
            }, 300)
            $(".menu-item:nth-child(2)").animate({
                left: "110%",
                opacity: 1
            }, 500)
            $(".menu-item:nth-child(3)").animate({
                left: "110%",
                opacity: 1
            }, 700)
            $(".menu-item:last-child").animate({
                left: "110%",
                opacity: 1
            }, 900)
        })
        $(".menu").animate({
            left: "-=30px",
            opacity: 0.8,
        }, 200)
        $(".menu").animate({
            left: "+=30px",
            opacity: 1,
        }, 400)
    });


    $(".remove-icon").click(function (e) {
        $(".menu").animate({
            left: "-=" + $(".menu").width(),
            opacity: 0
        }, 500, function () {
            $(".menu-item:first-child").animate({
                left: "-110%",
                opacity: 0
            }, 300)
            $(".menu-item:nth-child(2)").animate({
                left: "-110%",
                opacity: 0
            }, 500)
            $(".menu-item:nth-child(3)").animate({
                left: "-110%",
                opacity: 0
            }, 700)
            $(".menu-item:last-child").animate({
                left: "-110%",
                opacity: 0
            }, 900)


        })
    });

});