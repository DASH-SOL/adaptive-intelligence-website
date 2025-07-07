import React, { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sky, OrbitControls } from "@react-three/drei"
import Grass from "./Grass"


function RotatingContainer({ children }) {
  const groupRef = useRef()
  
  useFrame(({ clock }) => {
    // Rotate the entire scene around the Y axis
    // Adjust the rotation speed by changing the multiplier (0.1 in this example)
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
  })

  return <group ref={groupRef}>{children}</group>
}


export default function GrassThreeD() {
  return (
    <Canvas camera={{ position: [15, 15, 10] }}>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <RotatingContainer>
          <Grass />
        </RotatingContainer>
      </Suspense>
      <OrbitControls 
        minPolarAngle={Math.PI / 2.5} 
        maxPolarAngle={Math.PI / 2.5} 
        enableRotate={true} 
        enableZoom={false} 
        enablePan={false} 
        enableDamping={true}
        dampingFactor={0.05}
        />
    </Canvas>
  )
}
