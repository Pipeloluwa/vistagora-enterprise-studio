import { useFrame, useLoader } from '@react-three/fiber';
import { LegacyRef, Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state_management/store';





  
const Wind = () => {
    const wheelSwitchActionValue= useSelector((state:RootState) => state.wheel_model.value);

    const lightRef:LegacyRef<THREE.PointLight> | null= useRef(null);
    const ModelRef:LegacyRef<THREE.Object3D> | null = useRef(null);
    const ModelRef11:LegacyRef<THREE.Object3D> | null = useRef(null);
    const ModelRef22:LegacyRef<THREE.Object3D> | null = useRef(null);
    const ModelRef2:LegacyRef<THREE.Object3D> | null = useRef(null);
    const model_file= useLoader(GLTFLoader, "/models/wind/scene.gltf")
    let model_children: THREE.Mesh[]= [];


    model_file.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh){ //The Object3D type in the traverse callback allows handling various child types in the scene, not just meshes.
            model_children.push(child);
        }
    });

    




    let modelCurrentX2:number= 2;
    let modelCurrentX:number= -4;
    let modelCurrentX11:number= -2;
    let modelCurrentX22:number= 0;

    useFrame((state) => {
        if (ModelRef2.current && ModelRef.current && ModelRef11.current && ModelRef22.current && ModelRef2.current){  

            ModelRef2.current.rotation.y = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef2.current.rotation.x = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef.current.rotation.y = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef.current.rotation.x = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef11.current.rotation.y = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef11.current.rotation.x = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef22.current.rotation.y = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            ModelRef22.current.rotation.x = (Math.abs(Math.sin(state.clock.elapsedTime)/2) );
            
            modelCurrentX2 -= 0.1;
            modelCurrentX -= 0.1;
            modelCurrentX11 -= 0.1;
            modelCurrentX22 -= 0.1;
            if (modelCurrentX2 < -5.5){modelCurrentX2= 3;}
            if (modelCurrentX < -5.5){modelCurrentX= 3;}
            if (modelCurrentX11 < -5.5){modelCurrentX11= 3;}
            if (modelCurrentX22 < -5.5){modelCurrentX22= 3;}
            ModelRef2.current.position.x= modelCurrentX2;
            ModelRef.current.position.x= modelCurrentX;
            ModelRef11.current.position.x= modelCurrentX11;
            ModelRef22.current.position.x= modelCurrentX22;

        }

    });



    return (
        <Suspense >
            <pointLight ref={lightRef} intensity={100.0} position={[0, 0, -55]}/>

            {
                wheelSwitchActionValue 
                    ?
                    <group>
                        
                        <primitive 
                            object={
                                model_file.scene.clone()
                            }
                          
                            scale= {0.15}
                            position= {[0, 0, -60]}
                            rotation= {[1.2, -10, 0]}
                            ref= {ModelRef}
                        />

                        <primitive 
                            object={
                                model_file.scene.clone()
                            }
                           
                            scale= {0.1}
                            position= {[0, 0, -60]}
                            rotation= {[1.2, -1, 0]}
                            ref= {ModelRef11}
                        />


                        <primitive 
                            object={
                                model_file.scene.clone()
                            }
                         
                            scale= {0.1}
                            position= {[0, 0, -60]}
                            rotation= {[1.2, -1, 0]}
                            ref= {ModelRef22}
                        />


                        <primitive 
                            object={
                                model_file.scene.clone()
                            }
                           
                            scale= {0.13}
                            position= {[2, -1, -60]}
                            ref= {ModelRef2}
                        />
                        
                    </group>      
                    
                    
                    : ""
            }
                      
            
        </Suspense>
        )
}

export default Wind