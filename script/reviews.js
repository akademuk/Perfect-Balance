$('.reviewsSlider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              },
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                },
              },
             {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              },
            },
          ],
});



