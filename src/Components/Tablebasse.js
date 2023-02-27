import React, { useRef,useState} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from 'react-three-fiber'
  
export default function Tablebasse(props) {
  const { nodes, materials } = useGLTF("/tablebasse.glb");
  const [hover, setHover] = useState(false);

  const myMesh = useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.chat.geometry} material={materials['Material.064']} position={[-0.67, 0.51, -0.67]} />
      <mesh geometry={nodes.nike_shoes.geometry} material={materials.nike_colors} position={[-0.6, 0.24, -0.36]} rotation={[0, -1.05, 0]} scale={0.08} />
      <mesh ref={myMesh}
        geometry={nodes.vinyl_plate.geometry} 
        material={materials.vinylplate_colors} 
        position={[-0.61, 0.49, -0.3]} 
        onPointerOver=  {(e) => {setHover(true)}}
        onPointerOut =  {(e) => {setHover(false)}}
      />
      <mesh geometry={nodes.vinyl_support.geometry} material={materials.vinylsocle_colors} position={[-0.61, 0.45, -0.34]} />
      <group position={[-0.7, 0.51, -0.42]} rotation={[0, -0.36, -Math.PI / 2]} scale={0.75}>
        <mesh geometry={nodes.Cylinder035.geometry} material={materials.blaack} />
        <mesh geometry={nodes.Cylinder035_1.geometry} material={materials.blaack} />
      </group>
      <mesh geometry={nodes.vinyl_cover.geometry} material={materials['Material.070']} position={[-0.74, 0.57, -0.32]} />
    </group>
  )
}