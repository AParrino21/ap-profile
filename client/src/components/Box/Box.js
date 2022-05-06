import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Ice from './ice.jpg'

const Box = () => {

    const colorMap = useLoader(TextureLoader, Ice)

    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            {/* <meshLambertMaterial attach="material" color="blue"/> */}
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}

export default Box
