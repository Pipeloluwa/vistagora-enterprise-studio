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

const Computer:React.FC<ComponentProps> = ({props}) => {
    const canvasRef= props;
    const computerSwitchValue= useSelector((state: RootState) => state.computer_model.value)

    const modelRef:LegacyRef<THREE.Object3D> | null = useRef(null);
    const lightRef:LegacyRef<THREE.PointLight> | null= useRef(null);
    const model_file= useLoader(GLTFLoader, "/models/computer1/scene.gltf")
    const [controlY, setControlY] = useState(0.30);
    const [controlY2, setControlY2] = useState(0.00);
    let model_children: THREE.Mesh[]= [];
    const rayCaster= new THREE.Raycaster();
    const {camera}= useThree();

    model_file.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh){ //The Object3D type in the traverse callback allows handling various child types in the scene, not just meshes.
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
            lightRef.current!.intensity= 200;
            lightRef.current!.position.x= intersectPoints.x;
            lightRef.current!.position.y= intersectPoints.y;

            modelRef.current!.rotation.y= intersectPoints.x * 0.09;
        }
        else{
            lightRef.current!.intensity= 0;
        }
    }



    useFrame(({clock}) => {
        if (!computerSwitchValue){ 
            const elapsedTime= clock.getElapsedTime()
            setControlY(Math.abs(Math.sin(elapsedTime)) * 0.3);
            setControlY2((Math.abs(Math.sin(elapsedTime)) * 0.5 ) - 1.5);
        }
    });


    useEffect(()=> {
        window.addEventListener('mousemove', eventHandler1);

        return () => {
            window.removeEventListener('mousemove', eventHandler1);
        }
    },[]);
    

    return (
        <Suspense >
            <pointLight ref={lightRef} intensity={0.0} position={[0, 0, -1]}/>

            <PresentationControls 
                enabled={true} // the controls can be disabled by setting this to false
                global={false} // Spin globally or by dragging the model
                cursor={true} // Whether to toggle cursor style on drag
                snap={false} 
                speed={1} 
                rotation={[0, 1.0, controlY]} 
            >
                
                
                <group>
                    <primitive 
                        object={
                            model_file.scene
                        }
                        scale= {1.3}
                        position= {[0, controlY2, 0]}
                        ref= {modelRef}
                    />
                </group>
            </PresentationControls>

        </Suspense>
        )
}


useLoader.preload(GLTFLoader, "/models/computer1/scene.gltf")

export default Computer