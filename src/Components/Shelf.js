import React, {useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import '../style.css'
import { Object_description } from "../Utils/DisplayHtml";


export default function Shelf ({props, textVisible}) {
  const { nodes, materials } = useGLTF("/etageres_up.glb");
  const [textRobotArm, setTextRobotArm] = useState(false);
  const [TextArrosoir, setTextArrosoir] = useState(false);
  const [textRobotCar, setTextRobotCar] = useState(false);
  const [textOrolia, setTextOrolia] = useState(false);
  const [textBatiplus, setTextBatiplus] = useState(false);
  const [textEsiee, setTextEsiee] = useState(false);
  const [textABMI, setTextABMI] = useState(false);


  const [hover, setHover] = useState(false);
  useCursor(hover)
  
  return (
<group {...props} dispose={null} 
// onPointerMissed={(e) => (e.stopPropagation(),e.delta <= 0.2, setTextVisible(false),bounds.refresh().fit())}
>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.livres_etageres.geometry}
  material={materials.etager_colors}
  // position={[0.28, 1.56, -0.9]}
/>

<mesh
    castShadow
    receiveShadow
    geometry={nodes.livre_suntsu.geometry}
    material={materials.suntsu_colors}
    // position={[-0.11, 1.55, -0.9]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.livre_naruto.geometry}
    material={materials.narutobook_colors}
    // position={[-0.11, 1.49, -0.9]}
  />

  <group 
      onPointerOver=  {(e) => {setHover(true);}}
      onPointerOut =  {(e) => {setHover(false);}}
  >
    <mesh
      castShadow 
      receiveShadow
      geometry={nodes.livre_esiee.geometry}
      material={materials.esiee_colors}
      // position={[0.2, 1.51, -0.87]}
      onClick=          {(e) => {setTextEsiee(true)}}
      onPointerMissed = {(e) => {setTextEsiee(false)}}
    > </mesh>
    <mesh
      position={[0.2, 1.51, -0.87]}
    >
      {textVisible && textEsiee && Object_description({titre:"ESIEE Paris", description:"Graduated of a master 2 engineering degree in embedded systems,\nI had the opportunity to provide maths and physics courses for \nfirst and second-year students", colore:"#354163eb"})}
    </mesh>

    <mesh
      castShadow
      receiveShadow
      geometry={nodes.livre_batiplus.geometry}
      material={materials.batiplus_colors}
      // position={[0.09, 1.51, -0.87]}
      onClick=          {(e) => {setTextBatiplus(true)}}
      onPointerMissed = {(e) => {setTextBatiplus(false)}}
    > </mesh>
    <mesh
      position={[0.09, 1.51, -0.87]}
    >
      {textVisible && textBatiplus && Object_description({titre:"BATIPLUS", description:"As a technical controller trainee, I was involved in a big \nconstruction project in order to ensured that the rules \nand regulations currently in force are respected  ", colore:"#5A5C63eb"})}
    </mesh>



    <mesh
      castShadow
      receiveShadow
      geometry={nodes.livre_orolia.geometry}
      material={materials.orolia_colors}
      // position={[0.4, 1.51, -0.87]}
      onClick=          {(e) => {setTextOrolia(true) }}
      onPointerMissed = {(e) => {setTextOrolia(false)}}
    > </mesh>
    <mesh
      position={[0.4, 1.51, -0.87]}
    >
      {textVisible && textOrolia && Object_description({titre:"OROLIA-SAFRAN", description:"As a R&D trainee, I developed a real time integrity \ncontrol system of GNSS satellite signals in order to \ndetect spoofing / jamming enemy attacks ", colore:"#907345eb"})}
    </mesh>

    <mesh 
      castShadow
      receiveShadow
      geometry={nodes.robot_voiture.geometry}
      material={materials.robotcar_colors}
      // position={[-0.03, 1.71, -0.89]}
      onClick=          {(e) => {setTextRobotCar(true)}}
      onPointerMissed = {(e) => {setTextRobotCar(false)}}
    > </mesh>
    <mesh
      position={[-0.03, 1.71, -0.89]}
    >
      {textVisible && textRobotCar && Object_description({titre:"Autonomous Robot", description:"Realized an autonomous robot which can escape \nfrom a maze without any external help", colore:"#8F7745eb"})}
    </mesh>
    
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.robot_bras_2.geometry}
      material={materials.robot_arm_colors}
      // position={[0.5, 1.77, -0.92]}
      onClick=          {(e) => {setTextRobotArm(true)}}
      onPointerMissed = {(e) => {setTextRobotArm(false)}}
    > </mesh>
    <mesh
      position={[0.22, 1.72, -0.9]}
    >
      {textVisible && textRobotArm && Object_description({titre:"Robotic Arm", description:"Implemented an autonomous conveying system \n with a 6-axis robotic arm (Niryo One)", colore:"#4c4742eb"})}
    </mesh>
    

    <mesh
      castShadow
      receiveShadow
      geometry={nodes.arrosoir.geometry}
      material={materials.arroisoir_colors}
      // position={[0.22, 1.72, -0.9]}
      onClick=          {(e) => {setTextArrosoir(true)}}
      onPointerMissed = {(e) => {setTextArrosoir(false)}}
    ></mesh>
 
    <mesh
      position={[0.22, 1.72, -0.9]}
    >
    {textVisible && TextArrosoir && Object_description({position:[0,0,0], titre:"Intelligent Biome", description:"Designed a fully connected self-sufficient vegetable\n garden developped under Raspberry Pi", colore:"#1a6e47eb"})}
    </mesh>
 
    
  </group>

  <group
        position={[0.462, 1.487, -0.849]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 1.23, 0.03]}>
        <mesh castShadow receiveShadow geometry={nodes.ABMI.geometry} material={materials.ABMI} />
        <mesh castShadow receiveShadow geometry={nodes.ABMI_1.geometry} material={materials.book} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ABMI_2.geometry}
          material={materials['Material.099']}
          onClick=          {(e) => {setTextABMI(true)}}
          onPointerMissed = {(e) => {setTextABMI(false)}}
        >{textVisible && textABMI && Object_description({titre:"ABMI", description:"As a mechatronic engineer, my missions were : \n - Design, development and characterization of a hydraulic artificial muscle (HAM).\n - Prototyping of an inspection robot for complex tube geometries.", colore:"#7A5E4C"})}</mesh>

    </group> 

</group>
  );
}

useGLTF.preload('/etageres_up.glb')
