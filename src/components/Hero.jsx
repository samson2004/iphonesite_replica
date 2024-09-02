import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from '../utils/index'
import { useEffect, useState } from "react";

const hero = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  // eslint-disable-next-line no-unused-vars
  const handlevideoSrc = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.addEventListener('resize', handlevideoSrc);
      return () => {
        window.removeEventListener('resize', handlevideoSrc);
      }
    });

  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      y: -25,
      delay: 1
    }),
      gsap.to('#cta', {
        opacity: 1,
        translateY: -20,
        delay: 2,
        ease: 'power1.inOut'
      })
  }, [])
  return (
    <section className="w-full nav-height bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc} src={videoSrc} type="video/mp4"></video></div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highligts" className="btn hover:bg-transparent  hover:border hover:text-blue hover:border-blue">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default hero