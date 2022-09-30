import React ,{useRef} from "react";
import {Canvas, useFrame,useLoader} from "@react-three/fiber/native";
import * as THREE from "three";
import sun from './assets/sun.gif'

const Sphere=()=>{
   const base=new THREE.TextureLoader().load(sun)
   const ref=useRef()
   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01))
   return(
      <mesh visible castShadow ref={ref}>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
         map={base}
         color="white"
      />
      </mesh>
   )
}
export default function App(){
   return (
      <Canvas>
         <ambientLight />
         <Sphere/>
      </Canvas>
   );
  
};