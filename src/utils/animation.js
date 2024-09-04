import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export const animatewithGSAP = (target, animationprops, scrollprops) => {
    gsap.to(target, {
        ...animationprops,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart  reverse  restart reverse',
            start: 'top 85%',
            ...scrollprops
        }
    })
}


export const animatewithgsaptimeline = (tl, rotationref, rotationstate, firsttarget, secondtarget, animationprops) => {
    tl.to(rotationref.current, {
        y: rotationstate,
        duration: 1,
        ease: 'power2.inOut'
    })
    tl.to(
        firsttarget, {
            ...animationprops,
            ease: 'power2.inOut',
        },
        '<'
    )
    tl.to(
        secondtarget, {
            ...animationprops,
            ease: 'power2.inOut',
        }, "<"
    )
}