﻿$(function() {

    const workSlider = $("[data-slider='slick']");

    /*Filter
    ==========================*/
    const filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data("filter");
        
        if (cat == "all") {
            $("[data-cat]").removeClass("hide");
        }
        else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data("cat");
    
                if(workCat != cat) {
                    $(this).addClass("hide");
                }
                else {
                    $(this).removeClass("hide");
                };
    
            });
        }

    })

    /*Modal
    ==========================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault();

        const $this = $(this);
        const modalID = $this.data("modal");

        $(modalID).addClass("show");
        $("body").addClass("no-scroll")

        setTimeout(function() {
            $(modalID).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200)

        workSlider.slick("setPosition");
    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        const $this = $(this);
        const modalParent = $this.parents(".modal");

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass("show");
            $("body").removeClass("no-scroll")
        }, 200)
    });

    $(".modal").on("click", function() {
        const $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        

        setTimeout(function() {
            $this.removeClass("show");
            $("body").removeClass("no-scroll")
        }, 200)
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });


    /*Slider: https://kenwheeler.github.io/slick/
    ==========================*/

    workSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        arrows: false
    });
    
    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        const currentSlider = $(this).parents(".modal").find("[data-slider='slick']")

        currentSlider.slick("slickPrev")
    })

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        const currentSlider = $(this).parents(".modal").find("[data-slider='slick']")

        currentSlider.slick("slickNext")
    })


        /*Mobile nav
    ==========================*/

    const navToggle = $("#navToggle")
    const nav = $("#nav")

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })

}); 