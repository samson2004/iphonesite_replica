import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "../components/videoCarousel";
const Highlight = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      translateY: 0
    }),
      gsap.to('.link', {
        opacity: 1,
        translateY: 0,
        duration: 1,
        stagger: 0.25
      })
  })
  return (
    <section id="highlights" className="w-screen  overflow-hidden h-full  common-padding bg-zinc sm:px-10 sm:py-32">
      <div className="screen-max-width ">
        <div className="mb-12 w-full md:flex justify-between">
          <h1 id="title" className="section-heading lg:text-6xl md:text-5xl  lg:mb-0">Get the Highlights.</h1>
          <div className="flex flex-wrap gap-5 ">
            <p id="watchfilmlink" className="link hover:underline ">watch the film <img className="ml-2" src={watchImg} alt="watch" /></p>
            <p id="watcheventlink" className="link hover:underline ">watch the event <img className="ml-2" src={rightImg} alt="watch" /></p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlight