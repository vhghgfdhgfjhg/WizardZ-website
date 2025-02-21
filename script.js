function page1(){
var tl = gsap.timeline()

tl.from("nav h1",{
    y:-30,
    duration: 0.5,
    opacity:0
})

tl.from("nav h2, nav button",{
    y:-30,
    duration: 0.5,
    opacity:0,
    stagger:0.2
})

tl.from(".con1",{
    x:-30,
    duration: 0.5,
    opacity:0
})

tl.from(".con2",{
    x:-30,
    duration: 0.5,
    opacity:0
})

tl.from(".img",{
    x:30,
    duration:0.5,
    opacity:0
})

tl.from(".imglist .white",{
    y:-30,
    duration: 0.5,
    opacity:0,
    stagger:0.2
})
}
page1()

function page2(){
var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroll:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:4
    }
})

tl1.from(".heading .h1",{
    y:-30,
    duration:0.4,
    opacity:0
})

tl1.from(".heading p",{
    x:-50,
    duration:0.4,
    opacity:0
})

tl1.from(".box1",{
    x:-50,
    duration:0.4,
    opacity:0
},"a")

tl1.from(".box2",{
    x:50,
    duration:0.4,
    opacity:0
},"a")

tl1.from(".box3",{
    x:-50,
    duration:0.8,
    opacity:0
},"b")

tl1.from(".box4",{
    x:50,
    duration:0.8,
    opacity:0
},"b")

tl1.from(".box5",{
    y:50,
    duration:0.8,
    opacity:0
})

}
page2()