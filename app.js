$(function() {

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
    let nav = $("nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })

});
