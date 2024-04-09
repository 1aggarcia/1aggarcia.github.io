/** Auto scroll local link clicks to the correct location on the page */

$(function () {
    $('a[href^="#"]').on('click', (event) => {
        event.preventDefault();
        const container = $(event.target.hash);
        // offset position based on navbar height
        const position = container.offset().top - $('nav').outerHeight();  

        $('html, body').animate({scrollTop: position}, 400);
    });
});