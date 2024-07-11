$(document).ready(function() {
    var initialAccordion = $('.question__accordeon-item').first();
    initialAccordion.find('.question__accordeon-body').show();
    initialAccordion.find('button img').addClass('rotated');

    $('.question__accordeon-head').on('click', function() {
        var $this = $(this);
        var body = $this.closest('.question__accordeon-item').find('.question__accordeon-body');
        var img = $this.find('button img');
        
        $('.question__accordeon-body').not(body).slideUp();
        $('.question__accordeon-head button img').not(img).removeClass('rotated');
        
        body.slideToggle();
        img.toggleClass('rotated');
    });
});
$('.popular__slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: $('.slick-left-prev'),
    nextArrow: $('.slick-right-next'),
});