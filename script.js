var tl = gsap.timeline()
tl.from('.nav h3',{
    y:-50,
    duration:0.5,
    stagger:0.3,
    opacity:0
});
tl.from('.main h1', {
    x:-1000,
    duration:0.8,
    stagger:0.3,
    
})

tl.from('.main img',{
    rotate:45,
    stagger:0.3,
    opacity:0
})