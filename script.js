var half = window.innerWidth/2

var path1 = `M 10 90 Q ${half/2} 90 ${half} 90`
var finalPath1 = `M 10 90 Q ${half/2} 90 ${half} 90`

var path2 = `M 10 100 Q ${half/2} 100 ${half - 10} 100`
var finalPath2 = `M 10 100 Q ${half/2} 100 ${half - 10} 100`

var path3 = `M 10 110 Q ${half/2} 110 ${half - 20} 110`
var finalPath3 = `M 10 110 Q ${half/2} 110 ${half - 20} 110`

var guitar = document.querySelector("#guitar")

var touchArea = document.querySelector("#event")

var touched = false

var main = document.querySelector("#main")
var pick = document.querySelector("#pick")

gsap.to("#line1",{
    attr:{d: finalPath1},
    duration: 0.4,
})
gsap.to("#line2",{
    attr:{d: finalPath2},
    duration: 0.3,
})
gsap.to("#line3",{
    attr:{d: finalPath3},
    duration: 0.3,
})
gsap.to("#hole",{
    opacity:1,
    duration:1
})

touchArea.addEventListener("mouseenter", function(){
    touched = true
})

guitar.addEventListener("mouseleave", function(){
    gsap.to("#line1",{
        attr: {d: finalPath1},
        duration:1,
        ease: "elastic.out(2,0.1)",
    })
    gsap.to("#line2",{
        attr: {d: finalPath2},
        duration:1,
        ease: "elastic.out(2,0.1)",
    })
    gsap.to("#line3",{
        attr: {d: finalPath3},
        duration:1,
        ease: "elastic.out(2,0.1)",
    })
    touched = false
})

guitar.addEventListener("mousemove", function(dets){
    if (touched){
    path1 = `M 10 90 Q ${dets.offsetX} ${dets.offsetY} ${half} 90`
    path2 = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} ${half-10} 100`
    path3 = `M 10 110 Q ${dets.offsetX} ${dets.offsetY} ${half-20} 110`
    console.log(dets)
    gsap.to("#line1",{
        attr: {d: path1},

    })
    gsap.to("#line2",{
        attr: {d: path2},

    })
    gsap.to("#line3",{
        attr: {d: path3},

    })
    }
})

main.addEventListener("mousemove", function(dets){
    if(dets.movementY>0){
    gsap.to(pick,{
        x:dets.x,
        y:dets.y,
        ease: "back.out(4)",
        rotate:45
    })}
    else{
        gsap.to(pick,{
            x:dets.x,
            y:dets.y,
            ease: "back.out(4)",
            rotate:125
        })
    }
    console.log(dets)
})

main.addEventListener("mouseenter", function(){
    gsap.to(pick,{
        scale:1,
    })
})

main.addEventListener("mouseleave", function(){
    gsap.to(pick,{
        scale:0,
    })
})