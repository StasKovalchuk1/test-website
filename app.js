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


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);


    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
            } else{
                alert('Ошибка');
            }
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_tel')) {
                if(telTest(input)) {
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else{
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function telTest(input) {
        return !/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(input.value);
    }

});





























