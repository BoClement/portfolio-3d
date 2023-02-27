import './style.css'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef} from 'react'
import { Html,Bounds, useBounds, useProgress, OrbitControls, Preload} from '@react-three/drei'
import { useKey } from 'react-use';
import React from 'react'

import Room from './Components/Room.js'
import Desk from './Components/Desk'
import Shelf from './Components/Shelf'
import Coffeetable from './Components/Coffeetable'
import Sports from './Components/Sports'
import Tablebasse from './Components/Tablebasse'
import Paint from './Components/Paint'
import Led from './Components/Led'

function Consigne({printed,description,titre}){
  return(
    <>
    {printed && <Html center >
      <div className="descriptionButton">
        <h1> {titre} </h1>
        <hr style={{height: "1px", border: "none", backgroundColor: "#ccc"}} />
        {description.split('\n').map(line => (
          <p key={line} style={{whiteSpace:"nowrap"}}> {line} </p>
        ))}
    </div>
  </Html>}
  </>);
}

function Loadeur() {
  const {progress} = useProgress()
  return (<Html center className="descriptionButton"> 
  {Math.floor(progress)} % loaded        
  </Html>);
}

export default function App(){
    const [printAnnotation, setPrintAnnotation]  = useState(true)
    const [printConsigne,   setPrintConsigne  ]  = useState(true)
    const [isVisible,   setIsVisible  ]  = useState(false)
    const ref   = useRef()

    function ResetCamera(){
      const bounds = useBounds()
      useKey(' ', () =>(bounds.refresh().clip().fit(),setPrintAnnotation(true),setIsVisible(false) , setPrintConsigne(false), console.log(printConsigne)));
    }
   
    function Annotation({text_position, text_text, cam_pos}){
      const [scaled,   setScaled  ]  = useState(false)
      const bounds = useBounds()
      return(
      <> 
      {printAnnotation &&<Html position={text_position}>
          <svg scale={1} height="68" width="68" transform="translate(-32 -32)" >
            <circle style={{ cursor: 'pointer' }} r={scaled ? 30:20} cx="34" cy="34"  stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onPointerOver={() => (setScaled(true),debugs('test'))} onPointerOut={()=>(setScaled(false))} onClick={() => (bounds.to({position:cam_pos, target:text_position}), setIsVisible(true), setPrintAnnotation(false),setPrintConsigne(false))} />
            <text x="29" y="40" fill="white" fontSize={17}  fontFamily="monospace" style={{ pointerEvents: 'none',    userSelect: 'none'}}>
              {text_text}
            </text>
          </svg>
      </Html>}
      {printAnnotation==false &&<Html position={text_position}>
          <svg scale={1} height="68" width="68"  transform="translate(-32 -32)" >
            <circle style={{ cursor: 'pointer' }} r={15} cx="34" cy="34"  stroke="rgba(0,0,0,.5)" strokeWidth="2" fill="rgba(0,0,0,.1)" onClick={() => (bounds.refresh().clip().fit(),setPrintAnnotation(true),setIsVisible(false) , setPrintConsigne(false), console.log(printConsigne))} />
            <text x="29" y="40" fill="rgba(0,0,0,.5)" fontSize={17}  fontFamily="monospace" style={{ pointerEvents: 'none',    userSelect: 'none'}}>
              x
            </text>
          </svg>
      </Html>}
      </>);
    }

    return(
    <>
        <Canvas camera = {{ 
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ 5,3,5 ]
        }}
        >
          <Suspense fallback={<Loadeur />}>
            <Consigne printed= {printConsigne} titre={"Portfolio 3D"} description={"Interact with objects to discover more about my projects and myself \n Click on annotations or simply press 'space' to begin / to exit scenes \n ... \n Clement Beau"}/>
            
            <OrbitControls ref={ref} makeDefault rotateSpeed={0.15}/>

              <Bounds clip observe damping={4} margin={1.5}>

                  <Room />
                  <Desk  textVisible={isVisible} />
                  <Shelf textVisible={isVisible} />
                  <Sports textVisible={isVisible} />
                  <Tablebasse />
                  <Paint />
                  <Coffeetable textVisible={isVisible}/>
                  <Led />
                  <Preload all />

                  <ResetCamera />
                  <Annotation text_position={[0.2, 1.6, -1]} text_text={"1"} cam_pos={[0.2,1.7,0.1  ]}/>
                  <Annotation text_position={[0.21, 0.75, -0.84]} text_text={"2"} cam_pos={[0.2,1.4,0.3]}/>
                  <Annotation text_position={[0.6, 0.3, 0.6]} text_text={"3"} cam_pos={[0.9,1.3,1]}/>
                  <Annotation text_position={ [-0.5, 1.03, 0.71]} text_text={"4"} cam_pos={[2,1.3,1]}/>

              </Bounds>

          {debugs("loading OK")}

          </Suspense>

        </Canvas>
    </>    

    );
}

function debugs( str){
    console.log(str)
    return null
  }