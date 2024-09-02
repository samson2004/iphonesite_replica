import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import Modelveiw from "./modelveiw";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from 'three';
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { models, sizes } from '../constants/index'
import { animatewithgsaptimeline } from "../utils/animation";

const Model = () => {

    // size for small and large 
    //model iphone 15 pro
    const [size, setsize] = useState('small');
    const [model, setmodel] = useState({
        title: 'iphone 15 Pro is natural titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg
    })

    //camera control for model

    const cameraControllsmall = useRef();
    const cameraControlllarge = useRef();

    //models
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation

    const [smallRotation, setsmallRotation] = useState(0);
    const [largeRotation, setlargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() => {
        if (size == 'large') {
            animatewithgsaptimeline(tl, small, smallRotation, '#veiw1', '#veiw2',
                { transform: 'translateX(-100%)', duration: 2 })
        }
        if (size == 'small') {
            animatewithgsaptimeline(tl, large, largeRotation, '#veiw2', '#veiw1',
                { transform: 'translateX(0)', duration: 2 })
        }
    }, [size]);

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1
        })
    }, [])
    return (
        <section className="common-padding ">
            <div className="screen-max-width">
                <h1 id='heading' className="section-heading">
                    Take a closer look
                </h1>
                <div className="flex flex-col items-center pt-5 ">
                    <div className=" w-full h-[75vh] md:h-[90vh] relative">
                        <Modelveiw
                            index={1}
                            groupref={small}
                            gsapType='veiw1'
                            controllRef={cameraControllsmall}
                            setrotationstate={setsmallRotation}
                            item={model}
                            size={size} />
                        <Modelveiw
                            index={2}
                            groupref={large}
                            gsapType='veiw2'
                            controllRef={cameraControlllarge}
                            setrotationstate={setlargeRotation}
                            item={model}
                            size={size} />
                        <Canvas className='w-full h-full '
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}>
                            <View.Port>

                            </View.Port>
                        </Canvas>
                    </div>
                    <div className="mx-auto w-full">
                        <p className="text-sm font-light text-center
                            mb-5">{model.title}</p>
                    </div>
                    <div className="flex-center">
                        <ul className="color-container">
                            {models.map((item, i) => (
                                <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                    style={{
                                        backgroundColor: item.color[0]
                                    }}
                                    onClick={() => setmodel(item)}></li>
                            ))}
                        </ul>
                        <button
                            className='size-btn-container'>
                            {sizes.map(({ label, value }) => (
                                <span key={label} className="size-btn"
                                    style={{
                                        background: size === value ? 'grey' : 'transparent',
                                        color: size === value ? 'black' : 'white'
                                    }}
                                    onClick={() => {

                                        setsize(value)

                                    }}>
                                    {label}
                                </span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Model