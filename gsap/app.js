gsap.from("#box1",{
    x:1000,
    duration:5,
    delay:1
})
gsap.to("#box2",{
    x:1000,
    duration:5,
    delay:1,
    rotate:360,
    backgroundColor:"white",
    borderRadius:"50%",
    scale:0.5,
    repeat:1,
    yoyo:true //jayega aur fir usi same tarikese wapis aayega like yoyo toy
})
gsap.from("h1",{
    color:"red",
    duration:2,
    delay:1,
    stagger:2 //ek ek karke kam karna hai tab if 1 then 1st 2nd andd -1 means ulta chalega its all 
})
gsap.from("h2",{
    opacity:0,
    duration:2,
    delay:1,
    y:20,
    rotate:155,
    repeat:1 //repeat 1 means works for 2 times 1 by default and 1 cause u told to do it infinite time just give value -1
})
/*gsap.to("#go1",{
    x:1500,
    rotate:350,
    duration:1.5,
    delay:1,
})
gsap.to("#go2",{
    x:1500,
    backgroundColor:"red",
    duration:1.5,
    delay:2.5 //runs when 1st is over to know t add duration and delay 
})
gsap.to("#go3",{
    x:1500,
    scale:0.5,
    borderRadius:"50%",
    duration:2,
    delay:4,
})*/
//to make code synchronus timeline in gsap is used in timeline you dont need to give delay caue thing automaticaly go in sync
var tl =gsap.timeline()
tl.to("#go1",{
    x:1500,
    rotate:350,
    duration:1.5,
    delay:1,
})
tl.to("#go2",{
    x:1500,
    backgroundColor:"red",
    duration:1.5,
})
tl.to("#go3",{
    x:1500,
    scale:0.5,
    borderRadius:"50%",
    duration:2,
})

var dl = gsap.timeline()

dl.from("h3",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
dl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
tl.from("#woo",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})