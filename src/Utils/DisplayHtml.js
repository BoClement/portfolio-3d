import { Html } from '@react-three/drei'
import React from "react";

export function Object_description({titre,description,mesh_pos,colore}){
    return (
      <Html position={mesh_pos} distanceFactor={5} center>
        <div style={{ backgroundColor: colore,whiteSpace:"nowrap"}} className="annotation"   >
          <h1 style ={{fontSize:4}}> {titre} </h1>
          <hr style={{height: "1px", border: "none", backgroundColor: "#ccc"}} />
          {description.split('\n').map(line => (
            <p key={line} style={{whiteSpace:"nowrap"}}> {line} </p>
          ))}
        </div>
      </Html>
    );

  }

export function Object_title({titre,mesh_pos,colore}){
  return (
    <Html position={mesh_pos} distanceFactor={5} center>
      <div className="annotation" style={{ backgroundColor: colore,whiteSpace:"nowrap", textAlign:"center"}}    >
        {titre.split('\n').map(line => (
          <p key={line} style={{whiteSpace:"nowrap"}}> {line} </p>
        ))}
      </div>
    </Html>
  );
}

export function Object_sport({titre,mesh_pos,colore}){
  return (
    <Html position={mesh_pos} distanceFactor={5} center>
      <div style={{ backgroundColor: colore,whiteSpace:"nowrap", textAlign:"center" }} className="annotation_sport"   >
        {titre.split('\n').map(line => (
          <p key={line} style={{whiteSpace:"nowrap"}}> {line} </p>
        ))}
      </div>
    </Html>
  );
}