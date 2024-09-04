/* eslint-disable react/no-unescaped-entities */
import { useGSAP } from "@gsap/react"
import { chipImg, frameImg, frameVideo } from "../utils"
import gsap from "gsap"
import { useRef } from "react"
import { animatewithGSAP } from "../utils/animation"

const Chip = () => {

    const videoref = useRef();


    useGSAP(() => {
        animatewithGSAP('.g_fadeIn', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
        },)

        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '-10% bottom'
            },
            scale: 2,
            opacity: 0,
            duration: 2,
            ease: 'power2.inOut',
        })
    }

    )


    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title md:text-7xl">
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>
                    <p className="hiw-subtitle md:text-2xl">
                        It's here . The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>
                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative h-full  flex-center">
                        <div className="overflow-hidden">
                            <img src={frameImg} alt="frame" className="bg-transparent relative z-10" />
                        </div>
                        <div className="hiw-video">
                            <video
                                className="pointer-events-none"
                                preload="none"
                                muted
                                playsInline
                                autoPlay
                                ref={videoref}
                                src={frameVideo}
                                type="video/mp4"></video>
                        </div>
                    </div>
                    <p className="text-gray  font-semibold text-center mt-3">Honkai : Star rail</p>
                </div>
                <div className="hiw-text-container md:flex-row">
                    <div className="flex flex-1 justify-center g_fadeIn">
                        <p className="hiw-text  md:font-semibold ">
                            A17 Pro is an entirely new class of iPhone chip that delivers our  {' '}
                            <span className="text-white">
                                best graphics performance by far.
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-1 justify-center g_fadeIn">
                        <p className="hiw-text  md:font-semibold ">
                            Mobile  {' '}
                            <span className="text-white ">
                                games like look and feel so immersive {' '}
                            </span>
                            with increadibly detailed environments and more realistic charcters . And with industry-leading and efficiency, A17 Pro takes
                            fast and runs with it
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col g_fadeIn">
                        <p className="hiw-text  md:font-semibold ">New</p>
                        <p className="hiw-bigtext md:font-semibold md:text-5xl ">Pro-class GPUs</p>
                        <p className="hiw-text  md:font-semibold ">with 6 cores</p>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Chip