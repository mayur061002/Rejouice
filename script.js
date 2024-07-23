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
};

cursorEffect();