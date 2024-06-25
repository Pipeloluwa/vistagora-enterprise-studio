import { useFrame, useLoader, } from '@react-three/fiber';
import { LegacyRef, Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Loading } from '../../loading';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state_management/store';





  
const MouseRipple = () => {
    const getIntersectPointValue= useSelector((state:RootState) => state.mouse_plane.intersectPoints);

    const lightRef:LegacyRef<THREE.PointLight> | null= useRef(null);
    const ModelRef:LegacyRef<THREE.Object3D> | null = useRef(null);
    const model_file= useLoader(GLTFLoader, "/models/mouse_ripple/scene.gltf")
    let model_children: THREE.Mesh[]= [];


    model_file.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh){ //The Object3D type in the traverse callback allows handling various child types in the scene, not just meshes.
            model_children.push(child);
        }
    });

    



    const randomColor:Array<THREE.Color>= [
        new THREE.Color(1, 0.9216, 0.9333), 
        new THREE.Color(0.9137, 0.1176, 0.3882),
        new THREE.Color(1, 0.3412, 0.1333),
        new THREE.Color(1, 0.7569, 0.0275),
        new THREE.Color(0.2980, 0.6863, 0.3137),
        new THREE.Color(0.1294, 0.5882, 0.9529),
        new THREE.Color(0.6118, 0.1529, 0.6902),
        new THREE.Color(0.2, 0.9216, 0.9333), 
        new THREE.Color(0.137, 0.1176, 0.8882),
        new THREE.Color(0.4, 0.3412, 0.5333),
        new THREE.Color(0.368, 0.569, 0.90275),
        new THREE.Color(0.7980, 0.0863, 0.13317),
        new THREE.Color(0.4294, 0.0882, 0.0529),
        new THREE.Color(0.9118, 0.7529, 0.2902),
    ];



    useFrame(() => {
        if (ModelRef.current){  
            const {x, y}= getIntersectPointValue;

            lightRef.current!.position.x= x;
            lightRef.current!.position.y= y;

            ModelRef.current!.position.x = x;
            ModelRef.current!.position.y = y;




            lightRef.current!.rotation.y += 0.04;
            lightRef.current!.rotation.x += 0.04;

            ModelRef.current.rotation.y += 0.04;
            ModelRef.current.rotation.x += 0.04;

            for (let i:number= 0; i < model_children.length; i ++){
                const randomColorIndex= Math.floor(Math.random() * randomColor.length); 

                const meshObject:THREE.Mesh= model_children[i];
                (meshObject.material as THREE.MeshStandardMaterial).color.set(randomColor[randomColorIndex]);
            }
        }

    });



    return (
        <Suspense fallback={<Loading />}>
            <ambientLight intensity={2}/>
            <pointLight ref={lightRef} intensity={100.0} position={[-0.5, 0, -60]}/>

            <group>

                <primitive 
                    object={
                        model_file.scene
                    }
                    scale= {0.2}
                    position= {[0, 0, -60]}
                    ref= {ModelRef}
                />
                
            </group>                
            
        </Suspense>
        )
}

export default MouseRipple