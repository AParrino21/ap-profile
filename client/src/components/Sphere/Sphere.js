import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Earth from './earth.jpg'
import { useFrame } from '@react-three/fiber'

const Sphere = () => {

    const mesh = useRef(null)

    const colorMap = useLoader(TextureLoader, Earth)
    useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.y -= 0.002))

    return (
        <mesh rotation={[90, 0, 20]} ref={mesh} castShadow>
            <sphereBufferGeometry attach="geometry" args={[0.9 ,32, 16]}/>
            {/* <meshLambertMaterial attach="material" color="blue"/> */}
            <meshStandardMaterial attach='material' map={colorMap} />
        </mesh>
    )
}

export default Sphere