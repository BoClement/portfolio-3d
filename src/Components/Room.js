import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Room (props) {
  const { nodes, materials } = useGLTF("/chambre.glb");
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lantern.geometry}
        material={materials["Material.066"]}
        position={[-0.29, 1.26, -0.89]}
        rotation={[-1.66, 0.16, -0.32]}
        scale={0.26}
        emissive={[0.5,0.5,0.5]}
      > 
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.file_lantern.geometry}
        material={materials["Material.067"]}
        position={[-0.25, 1.42, -0.91]}
        rotation={[-0.14, 0, 0.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pin_plastic_body.geometry}
        material={materials.taiwan_colors}
        position={[0.63, 1.29, -0.98]}
        rotation={[1.59, 1.01, -0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chaise.geometry}
        material={materials.chaise_color}
        position={[0.22, 0.14, -0.39]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.89}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rouge_switch.geometry}
        material={materials.switchred_colors}
        position={[0.96, 0.31, -0.79]}
        rotation={[0.86, -0.46, -0.06]}
        scale={0.06}
      />
      

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chaussettes.geometry}
        material={materials["Material.111"]}
        position={[0.55, 0.15, 0.54]}
        rotation={[-0.21, 1, 0.12]}
        scale={[0.02, 0.03, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.murs001.geometry}
        material={materials.murs}
      />
    </group>
    
  );
}