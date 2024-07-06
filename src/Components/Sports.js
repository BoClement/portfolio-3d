import React, { useState } from "react";
import { useGLTF,useCursor } from "@react-three/drei";
import { Object_sport } from "../Utils/DisplayHtml";

export default function Sports ({props, textVisible}) {
  const { nodes, materials } = useGLTF("/sport.glb");

  const [textPunch, setTextPunch] = useState(false);
  const [textAltere, setTextAltere] = useState(false);
  const [textStreet, setTextStreet] = useState(false);
  const [hover, setHover] = useState(false);
  
  useCursor(hover)

  return (
    <group>
      <group
        position={[-0.66, 0.14, 0.87]}
        rotation={[3.14, -0.52, 3.01]}
        scale={0.74}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.bequille_colors}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033_1.geometry}
          material={materials.bequille_colors}
        />
      </group>

    <group {...props} dispose={null}
      onPointerOver=  {(e) => {setHover(true);}}
      onPointerOut =  {(e) => {setHover(false);}}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handstand.geometry}
        material={materials.boois}
        position={[-0.6, 0.25, 0.03]}
        scale={[0.08, 0.08, 0.02]}
        onClick=          {(e) => {setTextStreet(true)}}
        onPointerMissed = {(e) => {setTextStreet(false)}}
      > {textVisible && textStreet && Object_sport({titre:"Since Covid-19, I've found calisthenics\nto be a rewarding way to improve \nboth physical and mental strength", mesh_pos:[-0.6, 0.25, 0.03] , colore:"#634A35eb"})}</mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.punching_ball.geometry}
        material={materials.punchingball_colors}
        position={[-0.5, 1.03, 0.71]}
        onClick=          {(e) => {setTextPunch(true)}}
        onPointerMissed = {(e) => {setTextPunch(false)}}
      > {textVisible && textPunch && Object_sport({titre:'Having grown up with a martial arts education,\n I spent 10 years practicing northern Kung-Fu' , colore:"#8f7668eb"})}</mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dumbell.geometry}
        material={materials.Dumbbell}
        position={[-0.61, 0.14, 0.58]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.67}
        onClick=          {(e) => {setTextAltere(true)}}
        onPointerMissed = {(e) => {setTextAltere(false)}}
      > {textVisible && textAltere && Object_sport({titre:'Passionate about bodybuilding, \nI am drawn to its physical challenges as well \nas its meticulous approach to the sport.' ,mesh_pos:[0, 0.2, -0.1], colore:"#5c5c5ceb"})}</mesh>
    </group>
  </group>
  );
}

useGLTF.preload('/sport.glb')
