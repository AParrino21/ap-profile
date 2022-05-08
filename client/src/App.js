import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './components/Box/Box';
import Sphere from './components/Sphere/Sphere';
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas className='canvas' shadowMap>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-right={10}
          shadow-camera-left={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={1.5} />
        <pointLight position={[0, -10, 0]} intensity={2.5} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
        </group>
        <Box />
      </Canvas>

      <Canvas className='canvas' shadowMap camera={{ position: [0, 0, 8], fov: 50 }} >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-right={10}
          shadow-camera-left={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-60, 40, 30]} intensity={2.0} />
        {/* <pointLight position={[0, -10, 0]} intensity={2.5} /> */}

        <group>
          <mesh receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
        </group>
        <Sphere />
      </Canvas>
    </div>
  );
}

export default App;
