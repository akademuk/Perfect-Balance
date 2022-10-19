if (window.matchMedia("(max-width: 576px)").matches) {
    $('.cashInvestmentsLeft').slick({
        slidesToShow: 2,
        slidesToScroll: 1,               
        dots: false,
        arrows:false,
        infinite: true, 
        variableWidth: true,  
        centerMode:true
});
} 
