import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState, Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import Loader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    <mesh>
      <pointLight intensity={0.1} />
      <hemisphereLight 
        intensity={0.15} 
        groundColor='black' />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
          />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Checking if it is a mobile view
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    // If change in screen size, the state is updated
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Incase of change in screen size, the function is called
    mediaQuery.addEventListener("change", handleMediaQueryChange)

  
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }

  }, [])


  return ( isMobile ? null :
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 30, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
      
    </Canvas>
  )
}


export default ComputersCanvas;