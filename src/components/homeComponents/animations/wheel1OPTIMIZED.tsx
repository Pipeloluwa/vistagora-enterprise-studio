import { Html, OrbitControls, PresentationControls,  } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { LegacyRef, Suspense, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { RootState } from '../../../state_management/store';
import { useDispatch, useSelector } from 'react-redux';
import { wheelSwitchAction } from '../../../state_management/reducers/wheel_model';


interface ComponentProps {
    props: React.RefObject<HTMLCanvasElement>;
  }

  
const Wheel1OPTIMIZED:React.FC<ComponentProps> = ({props}) => {
    const dispatch= useDispatch();
    const wheelSwitchActionValue= useSelector((state:RootState) => state.wheel_model.value);


    const canvasRef= props;
    const wheelRef:LegacyRef<THREE.Group> | null = useRef(null);
    const wheelLambertRef:LegacyRef<THREE.Group> | null = useRef(null);
    const mount_lambert1_0:LegacyRef<THREE.Mesh> | null = useRef(null);
    const plane_lambert4_0:LegacyRef<THREE.Mesh> | null = useRef(null);

    const {nodes, materials}= useLoader(GLTFLoader, "/models/ferris_wheel/scene.gltf");
    const rayCaster= new THREE.Raycaster();
    const {camera, scene}= useThree();

    let intersectObject:THREE.Mesh;

    const [wheelSwitch, setWheelSwitch]= useState<boolean>(false);
    let wheelSwitchChecker:boolean= false;
    let wheelInitialRotation:number= 0;

    let showMessageValue:boolean= false;
    const [message, setMessage]= useState<string>("");
    const showMessage= () => {
        showMessageValue 
            ? setMessage("Start the wheel by rotating your mouse around it repeatedly.")
            : setMessage("Double click to stop.");

        setTimeout(() => {
            setMessage("");
        }, 5000);

    }
    

    const wheelEvent1= async(event: MouseEvent) => {
        let canvasBounds = canvasRef!.current!.getBoundingClientRect();
        const x = ( ( event.clientX - canvasBounds!.left ) / ( canvasBounds!.right - canvasBounds!.left ) ) * 2 - 1;
        const y = - ( ( event.clientY - canvasBounds!.top ) / ( canvasBounds!.bottom - canvasBounds!.top) ) * 2 + 1;
        const current_mouse:THREE.Vector2= new THREE.Vector2( x, y );

        rayCaster.setFromCamera(current_mouse, camera);
        const intersects= rayCaster.intersectObjects(scene.children);

        if (intersects.length > 0 ){
            if(wheelSwitchChecker === false){
                showMessageValue= true;
                showMessage();

                intersectObject= intersects[0].object as THREE.Mesh;
                (intersectObject.material as THREE.MeshStandardMaterial).color.set(new THREE.Color(1, 1, 1));

                if (intersectObject.name === "wheel_lambert1_0"){
                    if (wheelInitialRotation < 46){
                        wheelInitialRotation += 2;               
                    }else{ 
                        setWheelSwitch((value) => !value); 
                        dispatch(wheelSwitchAction());
                        wheelSwitchChecker= true;
                    }

                    if (wheelLambertRef.current){wheelLambertRef.current.rotation.z += 2; }
                    
                }
            }
            else{showMessageValue= false; showMessage()}
        }
    }

    const stopwheelEvent1= () => {
        if(wheelSwitchChecker === true){
            setWheelSwitch((value) => !value)
            dispatch(wheelSwitchAction());
            showMessageValue= false;
            showMessage();
            wheelSwitchChecker= false;
            wheelInitialRotation= 0;

        }


    }




    useFrame((state) => {
        if (wheelRef.current && wheelLambertRef.current && plane_lambert4_0.current && mount_lambert1_0.current){ 
            if (wheelSwitch){
                wheelLambertRef.current.rotation.z+= 2;  
                wheelRef.current.rotation.y = (Math.abs(Math.sin(state.clock.elapsedTime)) * 0.3 );
            }  
            
        }

    });


    useEffect(() => {
        if (wheelSwitchActionValue){
            showMessageValue= false;
            showMessage();
            setWheelSwitch((value) => !value); 
            wheelSwitchChecker= true;
        }
    },[])


    useEffect(()=> {
        setMessage("HEY! please turn me on!");
        

        let colorSwitch:boolean= false;
        setInterval(() => {
            if (plane_lambert4_0.current && mount_lambert1_0.current){
                if (colorSwitch === false){
                    (plane_lambert4_0.current.material as THREE.MeshStandardMaterial).color.set(new THREE.Color(0.5, 0.5, 9));
                    (mount_lambert1_0.current.material as THREE.MeshStandardMaterial).color.set(new THREE.Color(333/255, 30/255, 199/255));
                    colorSwitch = true;
                }
        
                else{
                    (plane_lambert4_0.current.material as THREE.MeshStandardMaterial).color.set(new THREE.Color(233/255, 30/255, 199/255));
                    (mount_lambert1_0.current.material as THREE.MeshStandardMaterial).color.set(new THREE.Color(0.5, 0.5, 9));
                    colorSwitch = false;
                }
            }
    
        }, 1500);
        

        wheelInitialRotation= 0;
        window.addEventListener('mousemove', wheelEvent1);
        window.addEventListener('dblclick', stopwheelEvent1);

        return () => {
            window.removeEventListener('mousemove', wheelEvent1);
            window.removeEventListener('dblclick', stopwheelEvent1);
        }
    },[]);

    return (
        <Suspense fallback={null}>
            <ambientLight intensity={10.0}/>
            <PresentationControls rotation={[0, 2.35, 0]}>
                <group ref= {wheelRef} scale= {0.1} position= {[0, -0.3, 0]}>


                    {/* ++++++++++++++++++++++++ GLTF TO JSX FILE STARTS HERE ++++++++++++++++++++++++ */}
                    <group name="Sketchfab_Scene">
                        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                        <group name="344e53956fc64179b2c5850dbd954ec7fbx" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Object_2">
                            <group name="RootNode">
                                <group name="plane" position={[0, -10.524, -2.305]} scale={[25.843, 1, 25.843]}>
                                <mesh
                                    ref={plane_lambert4_0}
                                    name="plane_lambert4_0"
                                    castShadow
                                    receiveShadow
                                    geometry={(nodes.plane_lambert4_0 as THREE.Mesh).geometry}
                                    material={materials.lambert4}
                                />
                                </group>
                                <group
                                name="directionalLight1"
                                position={[-11.19, 30.469, 71.215]}
                                rotation={[0.655, -0.245, 0.377]}
                                />
                                <group name="ambientLight1" position={[-8.985, 21.249, 60.684]} />
                                <group name="mount">
                                    <mesh
                                        ref={mount_lambert1_0}
                                        name="mount_lambert1_0"
                                        castShadow
                                        receiveShadow
                                        geometry={(nodes.mount_lambert1_0 as THREE.Mesh).geometry}
                                        material={materials.lambert1}
                                    />
                                </group>



                                <group ref={wheelLambertRef} name="wheel" position={[0, 12.13, -2.205]} rotation={[0, 0, -1.697]}>
                                <mesh
                                    name="wheel_lambert1_0"
                                    castShadow
                                    receiveShadow
                                    geometry={(nodes.wheel_lambert1_0 as THREE.Mesh).geometry}
                                    material={materials.lambert1}
                                />
                                </group>
                            </group>
                            </group>
                        </group>
                        </group>
                    </group>





                 
        

                    <Html className='w-[200px] flex lg:ml-0 -ml-10'>
                        <div className={`md:flex hidden  ${message === "" ? 'opacity-0' : 'bg-white p-2 text-black rounded-2xl text-xs flex'} `}>
                            {message}
                        </div>

                        <div className={`md:hidden flex  ${message === "" ? 'opacity-0' : 'bg-white p-2 text-black rounded-2xl text-xs flex'} `}>
                            {
                                message === "Start the wheel by rotating your mouse around it." 
                                ? "Tap repeatedly on the wheel to start rotation" 
                                : message
                            }
                            
                        </div>
                    </Html>


                    

                  
            
       
                  
                </group>                
            </PresentationControls>

        
           


            {/* Lock vertical rotation at 90 degrees (looking straight ahead) */}
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI /2} maxPolarAngle={Math.PI /2}/> 
        </Suspense>
        )
}


useLoader.preload(GLTFLoader, "/models/ferris_wheel/scene.gltf");

export default Wheel1OPTIMIZED