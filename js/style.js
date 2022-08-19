$(function () {

    //스크롤 했을 때 헤더메뉴 상단고정
    var menu_offset = $(".header_02").offset();

    $(window).scroll(function () {

        if ($(document).scrollTop() > menu_offset.top) {

            $(".header_02").addClass("menu-fixed");

        } else {

            $(".header_02").removeClass("menu-fixed");

        }

    });


    //상단메뉴 클릭시 발생되는 이벤트
    $(".header_02 li").on("click", function () {

        $(this).find("a").addClass("active");
        $(this).siblings().find("a").removeClass("active");
    });


    //    //원더월 클래스 패스 구매 슬라이드


    //더보기버튼 숨기기 버튼

    //coming_soon btn
    $("#cs_mbtn").on("click", function () {
        $("#cs_mbtn").hide();
        $("#cs_hbtn").show();

        $(".cs:nth-of-type(n+6)").show();
    });
    $("#cs_hbtn").on("click", function () {
        $("#cs_hbtn").hide();
        $("#cs_mbtn").show();

        $(".cs:nth-of-type(n+6)").hide();
    });


    //Popular art classes btn
    $("#pac_mbtn").on("click", function () {
        $("#pac_mbtn").hide();
        $("#pac_hbtn").show();

        $(".pac:nth-of-type(n+6)").show();
    });
    $("#pac_hbtn").on("click", function () {
        $("#pac_hbtn").hide();
        $("#pac_mbtn").show();

        $(".pac:nth-of-type(n+6)").hide();
    });


    //New art classes btn
    $("#nac_mbtn").on("click", function () {
        $("#nac_mbtn").hide();
        $("#nac_hbtn").show();

        $(".nac:nth-of-type(n+6)").show();
    });
    $("#nac_hbtn").on("click", function () {
        $("#nac_hbtn").hide();
        $("#nac_mbtn").show();

        $(".nac:nth-of-type(n+6)").hide();
    });


    //music_ClassicMusicalJazz
    $("#cmj_mbtn").on("click", function () {
        $("#cmj_mbtn").hide();
        $("#cmj_hbtn").show();

        $(".cmj:nth-of-type(n+6)").show();
    });
    $("#cmj_hbtn").on("click", function () {
        $("#cmj_hbtn").hide();
        $("#cmj_mbtn").show();

        $(".cmj:nth-of-type(n+6)").hide();
    });


    //----------(리뷰)---
    var $html = $("html");
    var deviceSize = {
        pc: 770
    };

    $(window).on("resize", function () {
        var w_size = $(window).width();
        if (w_size >= deviceSize.pc) {
            //PC일경우
            $("#review_mbtn").click(function () {

                var con_06H = $(".con_06").height();

                if (con_06H >= 0, con_06H < 3555) {
                    $(".con_06").css({
                        "height": "+=872px"
                    });
                } else {

                    $(".con_06").css({
                        "height": "+=436px"
                    });

                    $("#review_mbtn").hide();
                    $("#review_hbtn").show();
                }
            });



            $("#review_hbtn").on("click", function () {

                $("#review_mbtn").show();
                $("#review_hbtn").hide();

                $(".con_06").css({
                    "height": "1039px"
                });

            });


        } else {
            //모바일인 경우
            $("#review_mbtn").click(function () {

                var con_06H = $(".con_06").height();

                if (con_06H >= 0, con_06H < 7273) {
                    $(".con_06").css({
                        "height": "+=1030px"
                    });
                } else if (con_06H >= 7273) {

                    $(".con_06").css({
                        "height": "+=356px"
                    });

                    $("#review_mbtn").hide();
                    $("#review_hbtn").show();
                }
            });



            $("#review_hbtn").on("click", function () {

                $("#review_mbtn").show();
                $("#review_hbtn").hide();

                $(".con_06").css({
                    "height": "1117px"
                });

            });

        }

    });
    $(function () {
        $(window).trigger("resize");
    });


});
