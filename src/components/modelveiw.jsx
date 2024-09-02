import { View, PerspectiveCamera, OrbitControls } from "@react-three/drei"
import Lights from "./light"
import Iphone from './iphone'
import * as THREE from "three";
import { Suspense } from "react";
import { div } from "three/webgpu";
import Loader from "./loader";


const Modelveiw = ({ index,
    groupref,
    gsapType,
    controllRef,
    setrotationstate,
    item,
    size }) => {
    return (
        <View
            index={index}
            id={gsapType}
            ref={groupref}
            className={`  h-full w-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>


            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} ></PerspectiveCamera>

            <Lights></Lights>

            <OrbitControls
                makeDefault
                ref={controllRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setrotationstate(controllRef.current.getAzimuthalAngle())} />

            <group ref={groupref} name={(index === 1) ? 'small' : 'large'} position={[0, 0, 0]} >

                <Suspense fallback={<Loader />}>
                    <Iphone
                        scale={(index === 1) ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size} />
                </Suspense>
            </group >

        </View >)
}

export default Modelveiw