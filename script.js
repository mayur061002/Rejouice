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
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
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

function page2animation(){
    gsap.from("#middle h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        srcollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            markers: true,
            scrub: 2
        }
    })
}
page2animation();


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
Swiperjs()