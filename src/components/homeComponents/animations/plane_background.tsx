import { Plane } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { LegacyRef, Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useDispatch } from 'react-redux';
import { mouse_plane_clickSwitch } from '../../../state_management/reducers/mouse_plane';



interface ComponentProps {
    props: React.RefObject<HTMLCanvasElement>;
  }

  
const PlaneBackground:React.FC<ComponentProps> = ({props}) => {
    const dispatch= useDispatch();

    const canvasRef= props;
    const lightRef:LegacyRef<THREE.PointLight> | null= useRef(null);
    const rayCaster= new THREE.Raycaster();
    const {camera, scene}= useThree();


    

    const wheelEvent1= async(event: MouseEvent) => {
        let canvasBounds = canvasRef!.current!.getBoundingClientRect();
        const x = ( ( event.clientX - canvasBounds!.left ) / ( canvasBounds!.right - canvasBounds!.left ) ) * 2 - 1;
        const y = - ( ( event.clientY - canvasBounds!.top ) / ( canvasBounds!.bottom - canvasBounds!.top) ) * 2 + 1;
        const current_mouse:THREE.Vector2= new THREE.Vector2( x, y );

        rayCaster.setFromCamera(current_mouse, camera);

        const intersects= rayCaster.intersectObjects(scene.children);
        const intersectPoints= intersects[0].point;
        dispatch(mouse_plane_clickSwitch({x:intersectPoints.x, y:intersectPoints.y}));

    }



    useEffect(()=> {
        window.addEventListener('mousemove', wheelEvent1);

        return () => {
            window.removeEventListener('mousemove', wheelEvent1);
        }
    },[]);


    return (
        <Suspense fallback={null}>
            <ambientLight intensity={2}/>
            <pointLight ref={lightRef} intensity={100.0} position={[-0.5, 0, -60]}/>

            <group>

                <Plane material={ new THREE.MeshBasicMaterial({opacity: 0.0, transparent: true})} scale={[window.innerWidth, window.innerHeight, 1]} position= {[0, 0, -60]}>
                </Plane>
                
            </group>                
            
        </Suspense>
        )
}

export default PlaneBackground