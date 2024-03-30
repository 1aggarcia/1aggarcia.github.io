/** Auto scroll nav bar clicks to the correct location */

$(function () {
    $('a[href^="#"]').on('click', (event) => {
        event.preventDefault();
        const container = $(event.target.hash);
        // offset position based on navbar height
        const position = container.offset().top - $('nav').outerHeight();  

        $('html, body').animate({scrollTop: position}, 400);
    });
});

function scrollToElem(cssSelector) {
    const container = $(cssSelector);
    // offset position based on navbar heigth
    const position = container.offset().top - $('nav').outerHeight();  

    $('html, body').animate({scrollTop: position}, 400);
}