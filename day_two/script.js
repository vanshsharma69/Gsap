// gsap.from("#page1 #box",{
//     scale:0,
//     delay:0.5,
//     duration:2,
//     rotate:360
// })


// gsap.from("#page2 #box",{
//     scale:0, 
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page3 #box",{
//     scale:0,
//     delay:0.5,
//     duration:2,
//     rotate:360
// })


gsap.to("#page2 h1",{
    transform:"translateX(-180%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:4,
        pin:true,

    }
})