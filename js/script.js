
$(document).ready(function(){
    $(".header-menu-link").on("click", function(){
        $(".header-menu-link").removeClass("active");
        $(".header-menu-link-a").removeClass("active");
		$(this).addClass("active");
        $(this).find(".header-menu-link-a").addClass("active");
        console.log("1");
	});

    $(".item-menu-img-li").on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
    });

    $('#navigation-menu-a-1').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2.active').removeClass("active");
        $('.item-block').addClass("active");
        $('.description-item').addClass("active");
        $('.feedback-item').addClass("active");
    });

    $('#navigation-menu-a-2').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2').addClass("active");
        $('.item-block.active').removeClass("active");
        $('.description-item.active').removeClass("active");
        $('.feedback-item.active').removeClass("active");
    });

    $('#navigation-menu-a-3').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2.active').removeClass("active");
        $('.item-block.active').removeClass("active");
        $('.description-item').addClass("active");
        $('.feedback-item.active').removeClass("active");
        $('.description-and-feedback').css("margin-left", "0px");
        console.log("WOOOOOOOOOOORK");
    });

    $('#navigation-menu-a-4').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2.active').removeClass("active");
        $('.item-block.active').removeClass("active");
        $('.description-item.active').removeClass("active");
        $('.feedback-item').addClass("active");
        $('.description-and-feedback').css({"margin-left": "0px", "margin-right":"0px", "width":"1430px"});
        $('.feedback-item.active').css("width", "100%");
    });

        //accordeons
    $('.div-li-list-garant').on("click", function(event){
        $('.div-li-list-garant').not($(this)).removeClass('active');
        $('.div-li-list-garant').not($(this)).next().slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
        console.log("Работает");
    });


    //basket
    let valueBasket = document.getElementById("basket-count-id").innerHTML;
    $('.buy-span').on("click", function(event){
        valueBasket =Number(valueBasket)+1;
        document.getElementById("basket-count-id").textContent=valueBasket;
        console.log( valueBasket);
    });

    //rate
    const ratingItemsList = document.querySelectorAll('.star');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
    ratingItemsArray.forEach(item => {
        item.addEventListener('click', ()=>{
            const {itemValue} = item.dataset;
            item.closest(".rating").dataset.totalValue =  item.dataset.itemValue;
        })
    });

    //scrollbar
    new SimpleBar(document.getElementById('scroll-list-of-weapons'), {
        autoHide: false,

      });

    
    //slick 1

    $('.list-of-categories').slick({
        arrows: false,
        infinite: false,
        adaptiveHeight: false,
        speed: 300,
        slidesToShow: 5,
    });
    let firstSlider = $('.list-of-categories');


    //to top
        let toTOP = document.querySelector('.to-top')
        function to_TOP() {
            if (window.pageYOffset > 100) {
              toTOP.style.opacity = '1'
            } else { toTOP.style.opacity = '0' }
          }
        window.onscroll = to_TOP
        // появление/затухание кнопки #back-top
        $(function (){
    
            // при клике на ссылку плавно поднимаемся вверх
            $(".to-top").click(function (){
                $("body,html").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
        $(document).click((e) => {
            const {target} = e;
            if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
              e.preventDefault();
            }
          });




    //slick-sliders
    $('.item-menu-img-ul').slick({
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 4,
        vertical: true,
        focusOnSelect: true,
        asNavFor: ".slider-2",
        responsive:[
            {
                breakpoint: 360,
                settings: {
                    vertical: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1055,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    $('.slider-2').slick({
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: ".item-menu-img-ul"
    });

    $('.ul-list-of-product').slick({
        arrows: true,
        slidesToShow: 5,
        responsive:[
            {
                breakpoint: 450,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 360,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1618,
                settings: {
                    slidesToShow: 4,
                    arrows: true
                }
            },
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 885,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    })

})