if (window.matchMedia("(max-width: 576px)").matches) {
    $('.fade').slick({
        slidesToShow: 1,
        slidesToScroll: 1,               
        dots: false,
        arrows:false,
        infinite: true, 
        variableWidth: true,  
        centerMode:true
});
} 


