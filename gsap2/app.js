/*gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})*/
/*gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})*/
gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    rotate:720,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:true   ,                 //its a property used to conrol all animation only on basis of srolling no timeline can be true or false or value can fall btwn 1 to 5
        pin:true
    }
})