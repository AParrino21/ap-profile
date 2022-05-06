import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './components/Box/Box';
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
