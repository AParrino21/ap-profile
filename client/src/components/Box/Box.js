import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Ice from './ice.jpg'
import { useFrame } from '@react-three/fiber'

const Box = () => {

    const mesh = useRef(null)

    const colorMap = useLoader(TextureLoader, Ice)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.002))

    return (
        <mesh rotation={[90, 0, 20]} ref={mesh} castShadow>
            <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
            {/* <meshLambertMaterial attach="material" color="blue"/> */}
            <meshStandardMaterial attach='material' map={colorMap} />
        </mesh>
    )
}

export default Box
