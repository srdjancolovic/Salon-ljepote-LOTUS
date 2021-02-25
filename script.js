'use-strict';

const priceBtn = document.querySelector('.price');
const priceBtnCarbon = document.querySelector('.price-two');
const descBtn = document.querySelector('.details-button');
const closeBtn = document.querySelectorAll('.close-button');
const descTxt = document.querySelector('.description');
const shortDesc = document.querySelector('.short-description');
const priceDesc = document.querySelector('.price-desc');
const carbonDesc = document.querySelector('.carbon-description');
const carbonDescExtra = document.querySelector('.carbon-desc');
const bioRePeelDesc = document.querySelector('.biorepeel-desc');
const ctaPromotionBtn = document.querySelector('.action-btn')
const backToHomepageBtn = document.querySelector('.back-btn');
const landingPageHeading = document.querySelector('.landing-heading')
const landingPageDesc = document.querySelector('.landing-desc')
const promotionsSection = document.querySelector('.promotions')


const closeWindow = function(){
    descTxt.classList.add('hide');
    shortDesc.classList.remove('hide');
    priceDesc.classList.add('hide');
    carbonDesc.classList.remove('hide');
    carbonDescExtra.classList.add('hide');
    priceBtnCarbon.classList.remove('hidden');
}

for (let i = 0; i < closeBtn.length; i++){
    closeBtn[i].addEventListener('click', closeWindow);
}
$(descBtn).click(function(){
    $(bioRePeelDesc).removeClass('hide');
    $(shortDesc).addClass('hide');
    $(priceBtn).addClass('hide')
})
$(priceBtn).click(function(){
    $(shortDesc).addClass('hide');
    $(priceDesc).removeClass('hide');
    $(priceBtn).addClass('hide')
})
$(priceBtnCarbon).click(function(){
    $(carbonDesc).addClass('hide');
    $(carbonDescExtra).removeClass('hide');
    $(priceBtnCarbon).addClass('hidden')
})
$(ctaPromotionBtn).click(function(){
    $(landingPageHeading).addClass('hide');
    $(landingPageDesc).addClass('hide');
    $(promotionsSection).removeClass('hide')
    $(ctaPromotionBtn).addClass('hide')
})
$(backToHomepageBtn).click(function(){
    $(landingPageHeading).removeClass('hide');
    $(landingPageDesc).removeClass('hide');
    $(promotionsSection).addClass('hide')
    $(ctaPromotionBtn).removeClass('hide')

})


/* CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK */
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function() {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(function() { 
    function onScrollInit(items, trigger) { 
        items.each(function() { 
            var osElement = $(this), 
                osAnimationClass = osElement.attr('data-animation'), 
                osAnimationDelay = osElement.attr('data-delay'); 

            osElement.css({ 
                '-webkit-animation-delay': osAnimationDelay, 
                '-moz-animation-delay': osAnimationDelay, 
                'animation-delay': osAnimationDelay 
            });

            var osTrigger = (trigger) ? trigger : osElement; 

            osTrigger.waypoint(function() { 
                osElement.addClass('animated').addClass(osAnimationClass); 
            }, {
                triggerOnce: true, 
                offset: '50%' 
            });
        });
    }

    onScrollInit($('.os-animation')); 
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); 
});