

// this is an Infinity box movement animation 

// in this yoyo is for reverse 

// repeat is for infinite loop 

// gsap.to("#box", {
//     x: 800,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     borderRadius: "50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true
// });


// this is text animation comming from down (y) 

// In this Stagger is used to make text some one by one not together. 
 
// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     delay:1,
//     y:30,
//     stagger:1
// })


// this is used for timeline

// var tl=gsap.timeline()

// tl.to("#box1",{
//     x:800,
//     duration:2,
//     delay:1,
//     rotate:360

// })

// tl.to("#box2",{
//     x:800,
//     duration:2,
//     delay:1,
//     rotate:360

// })

// tl.to("#box3",{
//     x:800,
//     duration:2,
//     delay:1,
//     rotate:360

// })


var tl= gsap.timeline()

tl.from("h2",{
    y:-30,
    duration:1,
    opacity:0,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    duration:0.5,
    opacity:0,
    delay:0.2,
    stagger:1
})