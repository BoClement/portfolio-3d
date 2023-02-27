import React, { useState } from "react";
import { useGLTF,useCursor } from "@react-three/drei";
import { Object_title } from "../Utils/DisplayHtml";


export default function Desk ({props, textVisible}) {
  const { nodes, materials } = useGLTF("/bureau.glb");

  const [textClavier, setTextClavier] = useState(false);
  const [textAlarm, setTextAlarm] = useState(false);
  const [textArm, setTextArm] = useState(false);
  const [textCrayon, setTextCrayon] = useState(false);
  const [textSpeaker, setTextSpeaker] = useState(false);

  const [hover, setHover] = useState(false);
  useCursor(hover)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pc_monitor.geometry}
        material={materials.pcmonitor_colors}
        position={[0.26, 0.89, -0.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bureau.geometry}
        material={materials.bureau_colors}
        position={[0.2, 0.5, -0.76]}
        scale={1.37}
      />
      <group 
          onPointerOver=  {(e) => {setHover(true);}}
          onPointerOut =  {(e) => {setHover(false);}}
      >

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clavier.geometry}
        material={materials.clavier_colors}
        position={[0.26, 0.76, -0.64]}
        rotation={[0.12, 0.32, -0.04]}
        scale={0.2}
        onClick=          {(e) => {setTextClavier(true)}}
        onPointerMissed = {(e) => {setTextClavier(false)}}
      > {textVisible && textClavier && Object_title({titre:'Programming language :\n C/C++ - Python - Java - UML - SysML' ,mesh_pos:[-0.5, 0, -0.5] ,colore:"#545252eb"})}</mesh>
        
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Alarm_Clock.geometry}
        material={materials.horloge_colors}
        position={[-0.29, 0.83, -0.83]}
        rotation={[1.57, 0, 0.16]}
        scale={[0.05, 0.02, 0.05]}
        onClick=          {(e) => {setTextAlarm(true)}}
        onPointerMissed = {(e) => {setTextAlarm(false)}}
      > {textVisible && textAlarm && Object_title({titre:'Rigorous' , colore:"#304166eb"})}</mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Crayon_bureau.geometry}
        material={materials.crayoncoffe_colors}
        position={[0.58, 0.8, -0.63]}
        rotation={[Math.PI, -0.09, Math.PI]}
        scale={0.67}
        onClick=          {(e) => {setTextCrayon(true)}}
        onPointerMissed = {(e) => {setTextCrayon(false)}}
      > {textVisible && textCrayon && Object_title({titre:'Adaptable' , colore:"#2f403ceb"})}</mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forearm_plastic.geometry}
        material={materials.handmuscle_colors}
        position={[-0.22, 0.76, -0.58]}
        rotation={[-1.64, -1.43, -1.71]}
        scale={0.02}
        onClick=          {(e) => {setTextArm(true)}}
        onPointerMissed = {(e) => {setTextArm(false)}}
      > {textVisible && textArm && Object_title({titre:'Perseverance' , colore:"#313742eb"})}</mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker.geometry}
        material={materials.Speaker_mat}
        position={[0.21, 0.83, -0.89]}
        rotation={[0, 0.27, 0]}
        scale={[1.25, 1.25, 1.31]}
        onClick=          {(e) => {setTextSpeaker(true)}}
        onPointerMissed = {(e) => {setTextSpeaker(false)}}
      > {textVisible && textSpeaker && Object_title({titre:'Active listening',mesh_pos:[-0.3, 0, 0], colore:"#404242eb"})}</mesh>    
      </group>
      </group>


  );
}
