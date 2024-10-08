function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locoscroll();


function cursorEffect(){
    var page1content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1content.addEventListener("mousemove", function(dets){
    
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"  
    // we can use gsap in place of above code, by that the code gets simpler and easier to understand.

        gsap.to(cursor,{
            x: dets.x,
            y: dets.y
        })
    });

    page1content.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    });

    page1content.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    });
}
cursorEffect();


function page2animation() {

    gsap.from("#middle h2", {
        y: 120,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            markers: false,
            scrub: 2
        }
    });

}
page2animation();


function page3animation(){

    gsap.from("#middle h2", {
        x: 120,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 47%",
            end: "top 45%",
            markers: false,
            scrub: 2
        }
    });

}
page3animation()


function Swiperjs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });
    

}
Swiperjs();


function loadinganimation(){
    
    var tl = gsap.timeline()
    
    tl.from("#loader h2", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    
    tl.to("#loader h2", {
        x: -50,
        opacity: 0,
        duration: .5,
        stagger: 0.1
    })
    
    tl.to("#loader", {
        opacity: 0
    })
    
    tl.from("#page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
    })
    
    tl.to("#loader", {
        display: "none"
    })

    tl.from("#part-3 h1 span", {
        y: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 80%",
            end: "top -10%",
            markers: false,
            scrub: 2
        }
    })

}
loadinganimation();



