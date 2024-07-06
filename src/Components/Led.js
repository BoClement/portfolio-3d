import React, { useState } from "react";
import {useGLTF, useVideoTexture, useTexture, useProgress} from "@react-three/drei";
import useSound from 'use-sound';
import { Suspense } from "react";

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  const {progress} = useProgress()
  return <> {  console.log({progress})}
    <meshBasicMaterial map={texture} toneMapped={false} />
</>
}

function FallbackMateriale({ url }) {
  const texture_code = useVideoTexture(url)
  return <meshBasicMaterial map={texture_code} toneMapped={false} />
}

export default function Led(props) {
  const { nodes, materials } = useGLTF("/led.glb");
  const [lithOn, setlightOn] = useState(false)
  const [play] = useSound("light-switch.mp3", {
        volume: 0.5,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pc_ecran.geometry}
        position={[0.21, 1, -0.87]}
        rotation={[0, 0, Math.PI]}
        > 
        <Suspense fallback={<FallbackMaterial url={"code_image.jpg"}/>}>
          <FallbackMateriale url={lithOn ? "arcane_montage_240p_flip.mp4" : "code_video_flip.mp4"}/>
        </Suspense>
        </mesh>  
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        position={[0.61, 0.46, 0.6]}
        scale={[-0.01, -0.02, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lampe.geometry}
        material={materials["manette_colors.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interrupteur1.geometry}
        material={materials["Material.013"]}
        position={[0.88, 1.03, -1]}
        onClick={() => (console.log(lithOn), play(), setlightOn(!lithOn))}
        >
      </mesh>
     
    <pointLight
        intensity={lithOn ? 0.2 : 0.8}
        position={[1.91, 3.3, 3.37]}
        color={"#FFF5ED"}
        castShadow={false}
    />
    
    <pointLight
        visible={lithOn}
        distance={1}
        color={"#FFB045"}   
        intensity={0.4}     
        position={[0.6, 0.6, 0.6]}
        castShadow={false}
    />

    <pointLight
        visible={lithOn}
        distance={0.5}
        color={"#FFF5E0"}   
        intensity={0.5}     
        position={[0.2, 1, -0.8]}
        castShadow={false}
    />

    </group>
  );
}

useGLTF.preload('/led.glb')
