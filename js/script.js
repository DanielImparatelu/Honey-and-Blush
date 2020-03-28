function test(){
    alert("test");
}

$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g, '<br/>'));
    return this;
}

$(document).ready(function(){
    $(".custom-btn").on('hover', function(){
        debugger;
        $(this).children().removeClass("hidden");
    });
    $(".custom-btn").on("click", function(){
        $(this).children().removeClass("hidden");
    });
    $(".custom-btn").hover(function(){
        $(this).children().find("hidden").removeClass("hidden");
    });

    $('.gallery-wrapper').find('.photo-wrapper').animate('fadeIn', 400);


    var homepageImages = 6;
    function insertHomepageImages(){
        for(let i=1; i<=homepageImages; i++){
            $('.gallery-inside-wrapper').append('<div class="card-wrapper"> <div class="photo col-sm-1" style="background-image:url(&quot;../images/homepage/'+ i + '.jpg&quot;)"></div> <div class="col-sm-9"> <p class="photo-text">tests</p> </div></div>');
        }
    }
   // setTimeout(function(){
        insertHomepageImages();
        $('.photo-text').multiline('This is a longer paragraph in order for me to see how the card layout looks like with an image as well as a longer string of text. I also need to see how the text behaves when inserting a new line, as well as how it looks on mobile /screen resize. This is a new line with an indent. ');
 //   }, 500);

});

/** code by webdevtrick ( https://webdevtrick.com ) **/
$(function () {
    "use strict";
    
    var slider          = $('.slider'),
        sliderUl        = slider.find('.slider-parent'),
        sliderUlLi      = sliderUl.find('.images-list'),
        sliderOl        = slider.find('.buttom-circles'),
        sliderOlLi      = sliderOl.find('.buttom-circles-list'),
        sliderFaRight   = slider.find('> .fa:first-of-type'),
        sliderFaLeft    = slider.find('> .fa:last-of-type'),
        sliderTime      = 1000,
        sliderWait      = 4000,
        sliderSetInt,
        resumeAndPause;
    
    sliderFaLeft.fadeOut();
    
 
	function resetWH() {
        slider.width(slider.parent().width()).height(slider.parent().width() * 0.5);
        sliderUl.width(slider.width() * sliderUlLi.length).height(slider.height());
        sliderUlLi.width(slider.width()).height(slider.height());
    }
    resetWH();
 
	function runSlider() {
        if (sliderOlLi.hasClass('slider-active')) {
            sliderUl.animate({
                marginLeft: -slider.width() * ($('.slider-active').data('slider') - 1)
            }, sliderTime);
        }
        if ($('.slider-active').is(':first-of-type')) {
            sliderFaLeft.fadeOut();
        } else {
            sliderFaLeft.fadeIn();
        }
        if ($('.slider-active').next().is(':last-of-type')) {
            sliderFaRight.fadeOut();
        } else {
            sliderFaRight.fadeIn();
        }
    }
 
	function runRight() {
        slider.each(function () {
            $('.slider-active').next().addClass('slider-active').siblings().removeClass('slider-active');
            $('.slider-active svg').attr('data-prefix', 'fas');
            $(".buttom-circles-list:not('.slider-active') svg").attr('data-prefix', 'far');
            runSlider();

            // if ($('.slider-active').next().is(':last-of-type')) {
            //     sliderUl.animate({
            //         marginLeft: -sliderUlLi.width() * $('.slider-active').data('slider')
            //     }, sliderTime, function () {
            //         sliderUl.css('margin-left', 0);
            //         sliderOlLi.first().addClass('slider-active').siblings().removeClass('slider-active');
            //         $('.slider-active svg').attr('data-prefix', 'fas');
            //         $(".buttom-circles-list:not('.slider-active') svg").attr('data-prefix', 'far');
            //     });
            // }
        });
    }
 
	function runLeft() {
        slider.each(function () {
            $('.slider-active').prev().addClass('slider-active').siblings().removeClass('slider-active');
            $('.slider-active svg').attr('data-prefix', 'fas');
            $(".buttom-circles-list:not('.slider-active') svg").attr('data-prefix', 'far');
            runSlider();
        });
    }
 
	sliderSetInt = function autoRunSlider() {
        if ($('.slider-active').next().is(':last-of-type')) {
            sliderUl.animate({
                marginLeft: -sliderUlLi.width() * $('.slider-active').data('slider')
            }, sliderTime, function () {
                sliderUl.css('margin-left', 0);
                sliderOlLi.first().addClass('slider-active').siblings().removeClass('slider-active');
                $('.slider-active svg').attr('data-prefix', 'fas');
                $(".buttom-circles-list:not('.slider-active') svg").attr('data-prefix', 'far');
            });
        } else {
            runRight();
        }
    };
    
    resumeAndPause = setInterval(sliderSetInt, sliderWait);
    
 
	$(window).on('resize', function () {
        resetWH();
    });
    
 
	slider.each(function () {
        sliderOlLi.click(function () {
            $(this).addClass('slider-active').siblings().removeClass('slider-active');
            $('.slider-active svg').attr('data-prefix', 'fas');
            $(".buttom-circles-list:not('.slider-active') svg").attr('data-prefix', 'far');
            runSlider();
        });
    });
    
    $('.slider-right').on('click', function () {
        runRight();
    });
    $('.slider-left').on('click', function () {
        runLeft();
    });
    
    slider.find('.fa').hover(function () {
        clearInterval(resumeAndPause);
    }, function () {
        resumeAndPause = setInterval(sliderSetInt, sliderWait);
    });
});