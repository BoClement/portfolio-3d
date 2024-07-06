import React, { useState } from "react";
import { useGLTF,useCursor } from "@react-three/drei";
import {Object_title } from "../Utils/DisplayHtml";

export default function Coffeetable({props, textVisible}) {
    const [textDessin, setTextDessin] = useState(false);
    const [textBook, setTextBook] = useState(false);
    const [textGame, setTextGame] = useState(false);
    const [textJapon, setTextJapon] = useState(false);
    const [hover, setHover] = useState(false);
    useCursor(hover)

    const { nodes, materials } = useGLTF("/coffetable.glb");
    return (
      <group {...props} dispose={null}>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tablecafe.geometry}
        material={materials["Material.033"]}
      />

      <group 
        onPointerOver=  {(e) => {setHover(true);}}
        onPointerOut =  {(e) => {setHover(false);}}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_AngloMania.geometry}
        material={materials.bookdessin_colors}
        onClick=          {(e) => {setTextDessin(true)}}
        onPointerMissed = {(e) => {setTextDessin(false)}}
      > {textVisible && textDessin && Object_title({titre:'Like drawing from time to time and \n and begin to do 3D modeling', mesh_pos:[0.65, 0.33, 0.82] , colore:"#377294eb"})}</mesh>

      <group
       onClick=          {(e) => {setTextGame(true)}}
       onPointerMissed = {(e) => {setTextGame(false)}}
      > {textVisible && textGame && Object_title({titre:'Passionate about High tech the day\n and gamer the night', mesh_pos:[0.66, 0.36, 0.35] , colore:"#3d4961eb"})}

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mannette_ps5.geometry}
          material={materials.manette_colors}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bleu_switch.geometry}
        material={materials["switchbleu_colors.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iphonex.geometry}
        material={materials.iphone_colors}
      />
      </group>
      
      <group
       onClick=          {(e) => {setTextBook(true)}}
       onPointerMissed = {(e) => {setTextBook(false)}}
      > {textVisible && textBook && Object_title({titre:'Reading allows me to enter new worlds,\n perspectives and ways of improvement', mesh_pos:[0.34, 0.38, 0.61] , colore:"#785d4ceb"})}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.livre_brucelee.geometry}
          material={materials.brucelee_colors}
          position={[-0.04, 0, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.livre_kingdom.geometry}
          material={materials.kingdom_colors}
          position={[-0.04, 0, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.livres_coffee.geometry}
          material={materials.bookcoffe_colors}
          position={[-0.04, 0, 0.01]}
        />
      </group>
      
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.baguette.geometry}
        material={materials.sushi_colors}
        onClick=          {(e) => {setTextJapon(true)}}
        onPointerMissed = {(e) => {setTextJapon(false)}}
      > {textVisible && textJapon && Object_title({titre:'Interested in Asian culture, I had\n the opportunity  to study one semester in\n Kyoto University of Advanced Science' ,mesh_pos:[0.84, 0.33, 0.59] , colore:"#702422eb"})}</mesh>
      
    </group>
    </group>

    );
  }

  useGLTF.preload('/coffetable.glb')
