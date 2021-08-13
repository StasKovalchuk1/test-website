$(function() {


    function PopUpHide(){
        $('#form__backend').hide();
    }

    function PopUpShow(){

        $('#form__backend').show();

    }



    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }



    /*   Smooth scroll   */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });




    /*   NavToggle   */
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })


    /* Form */
    let form__backend = $("#form__backend");
    let close = $("#close");
    let btn__orange = $(".btn__orange");
    btn__orange.on("click", function(event) {
        event.preventDefault();
        $('body').css('overflow','hidden');

        header.removeClass('fixed');
        form__backend.addClass('show');
        PopUpShow();

    });

    /*   Close Form   */

    $(document).click(function (e) {
        if ($(e.target).is('#form__backend')) {
            $('body').css('overflow','visible');

            PopUpHide();
            form__backend.removeClass('show');
            header.toggleClass("fixed");
        }
    });

    close.on("click", function(event) {
        event.preventDefault();
        $('body').css('overflow','visible');



        PopUpHide();
        form__backend.removeClass('show');
        header.toggleClass("fixed");

    });



});


    /*   Send Form   */

let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() {
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: form.serialize()
        }).done(function() {
            alert("Данные отправлены!");
            setTimeout(function() {
                form.trigger("reset");
            }, 1000);
        });
        return false;
    });

});





























