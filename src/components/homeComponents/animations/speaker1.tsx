import { PresentationControls } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { LegacyRef, Suspense, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state_management/store';


interface ComponentProps {
    props: React.RefObject<HTMLCanvasElement>;
  }

const Speaker:React.FC<ComponentProps> = ({props}) => {
    const canvasRef= props;
    const computerSwitchValue= useSelector((state: RootState) => state.computer_model.value)

    const modelRef:LegacyRef<THREE.Object3D> | null = useRef(null);
    const lightRef:LegacyRef<THREE.AmbientLight> | null= useRef(null);
    const model_file= useLoader(GLTFLoader, "/models/studio_monitors/scene.gltf")
    const [controlY, setControlY] = useState(0.30);
    const [controlY2, setControlY2] = useState(0.00);
    let model_children: THREE.Mesh[]= [];
    const rayCaster= new THREE.Raycaster();
    const {camera}= useThree();


    model_file.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh){
            model_children.push(child);
        }
    });



    const eventHandler1= async(event: MouseEvent) => {
        let canvasBounds = canvasRef!.current!.getBoundingClientRect();
        const x = ( ( event.clientX - canvasBounds!.left ) / ( canvasBounds!.right - canvasBounds!.left ) ) * 2 - 1;
        const y = - ( ( event.clientY - canvasBounds!.top ) / ( canvasBounds!.bottom - canvasBounds!.top) ) * 2 + 1;
        const current_mouse:THREE.Vector2= new THREE.Vector2( x, y );

        rayCaster.setFromCamera(current_mouse, camera);
        const intersects= rayCaster.intersectObjects(model_children);

        
        
        if(intersects.length > 0){
            const intersectPoints= intersects[0].point;
            lightRef.current!.intensity = 30 ;
            modelRef.current!.rotation.y= intersectPoints.x * 0.09;
        }
        else{
            lightRef.current!.intensity= 10;
        }

    }




    useFrame(({clock}) => {
        if (!computerSwitchValue){ 
            const elapsedTime= clock.getElapsedTime()
            setControlY(Math.abs(Math.sin(elapsedTime)) * 0.3);
            setControlY2((Math.abs(Math.sin(elapsedTime)) ) - 2.5);
        }
    });




    useEffect(()=> {
        window.addEventListener('mousemove', eventHandler1);

        return () => {
            window.removeEventListener('mousemove', eventHandler1);
        }
    },[]);
    

    return (
        <Suspense fallback={null}>
            <ambientLight ref={lightRef} intensity={15.0}/>

            <PresentationControls 
                enabled={true} // the controls can be disabled by setting this to false
                global={false} // Spin globally or by dragging the model
                cursor={true} 
                snap={false} 
                speed={1} 
                rotation={[0.3, -0.7, controlY]} 
            >
                
                
                <group>
                    <primitive 
                        object={
                            model_file.scene
                        }
                        scale= {3.2}
                        position= {[0, controlY2, 0]}
                        ref= {modelRef}
                        rotation= {[-0.2, 0, 0]}
                    />
                </group>
            </PresentationControls>

        </Suspense>
        )
}

useLoader.preload(GLTFLoader, "/models/studio_monitors/scene.gltf");

export default Speaker