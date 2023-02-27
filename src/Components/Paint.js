<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { useGLTF} from "@react-three/drei";

export default function Paint(props) {
  const { nodes, materials } = useGLTF("/tableaux.glb", '/draco-gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displate_rocklee.geometry}
        material={materials["Metal Poster Rock Lee Hachimon"]}
        position={[-0.8, 0.93, -0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.57}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mirroir.geometry}
        material={materials["Material.076"]}
        position={[-0.8, 1.2, 0.34]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.18, 0.1]}> </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displate_mobpsycho.geometry}
        material={materials.téléchargement}
        position={[-0.8, 1.59, -0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.69}
      />
    </group>
  );
}

=======
import React from "react";
import { useGLTF} from "@react-three/drei";

export default function Paint(props) {
  const { nodes, materials } = useGLTF("/tableaux.glb", '/draco-gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displate_rocklee.geometry}
        material={materials["Metal Poster Rock Lee Hachimon"]}
        position={[-0.8, 0.93, -0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.57}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mirroir.geometry}
        material={materials["Material.076"]}
        position={[-0.8, 1.2, 0.34]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.18, 0.1]}> </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displate_mobpsycho.geometry}
        material={materials.téléchargement}
        position={[-0.8, 1.59, -0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.69}
      />
    </group>
  );
}

>>>>>>> c1b7311f14e6089207c035038760f250a639ba04
=======
import React from "react";
import { useGLTF} from "@react-three/drei";

export default function Paint(props) {
  const { nodes, materials } = useGLTF("/tableaux.glb", '/draco-gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displate_rocklee.geometry}
        material={materials["Metal Poster Rock Lee Hachimon"]}
        position={[-0.8, 0.93, -0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.57}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mirroir.geometry}
        material={materials["Material.076"]}
        position={[-0.8, 1.2, 0.34]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.18, 0.1]}> </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displate_mobpsycho.geometry}
        material={materials.téléchargement}
        position={[-0.8, 1.59, -0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.69}
      />
    </group>
  );
}

>>>>>>> c1b7311f14e6089207c035038760f250a639ba04
