import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { LegacyRef, Suspense, useRef} from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Loading } from '../../loading';
import * as THREE from 'three';
const ROom1OPTIMIZED = () => {
    const roomRef:LegacyRef<THREE.Group> | null = useRef(null);
    const {nodes, materials}= useLoader(GLTFLoader, "/models/room1/scene.gltf")

    useFrame((_, delta) => {
        if (roomRef.current){
            roomRef.current.rotation.y -= delta * 0.2;
        }  

    });

    return (
        <Suspense fallback={<Loading />}>
            <ambientLight intensity={30.0}/>
            <group ref= {roomRef} scale= {1} position= {[0, -2, 0]}>


                {/* +++++++++ GLTF TO JSX FILES START HERE ++++++++++ */}
                <group scale={0.01}>
                    <group
                    position={[0, 122.556, -99.564]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[237.378, 243.106, 10.544]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.stage_stage5_0 as THREE.Mesh).geometry}
                        material={materials.stage5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.stage_stage2_0 as THREE.Mesh).geometry}
                        material={materials.stage2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.stage_stage3_0 as THREE.Mesh).geometry}
                        material={materials.stage3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.stage_stage1_0 as THREE.Mesh).geometry}
                        material={materials.stage1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.stage_stage4_0 as THREE.Mesh).geometry}
                        material={materials.stage4}
                    />
                    </group>
                    <group
                    position={[0, 600.51, -301.167]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[976.004, 3.161, 443.101]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.frame_frame1_0 as THREE.Mesh).geometry}
                        material={materials.frame1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.frame_frame2_0 as THREE.Mesh).geometry}
                        material={materials.frame2}
                    />
                    </group>
                    <group
                    position={[-1435.453, 946.575, -215.334]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[22.008, 574.789, 100]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.dec_dec1_0 as THREE.Mesh).geometry}
                        material={materials.dec1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.dec_dec2_0 as THREE.Mesh).geometry}
                        material={materials.dec2}
                    />
                    </group>
                    <group
                    position={[-1823.353, 355.15, -855.587]}
                    rotation={[-1.231, 0.4, 0.834]}
                    scale={[418.331, 113.488, 325.782]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Cube_dec_cube_dec1_0 as THREE.Mesh).geometry}
                        material={materials.cube_dec1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Cube_dec_cude_dec2_0 as THREE.Mesh).geometry}
                        material={materials.cude_dec2}
                    />
                    </group>
                    <group
                    position={[-1773.136, 316.913, 458.878]}
                    rotation={[Math.PI, 0.193, 0.717]}
                    scale={[359.582, 97.55, 280.03]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Cube_light_Cube_light2_0 as THREE.Mesh).geometry}
                        material={materials.Cube_light2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Cube_light_Cube_light3_0 as THREE.Mesh).geometry}
                        material={materials.Cube_light3}
                    />
                 
                    </group>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.house_house_0 as THREE.Mesh).geometry}
                    material={materials.house}
                    position={[45.134, 340.95, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[4456.016, 4456.016, 341.147]}
                    />
                   
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.roof_roof2_0 as THREE.Mesh).geometry}
                    material={materials.roof2}
                    position={[0, 1336.289, -67.294]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1205.933, 1148.85, 58.488]}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.floor_floor_0 as THREE.Mesh).geometry}
                    material={materials.floor}
                    position={[45.134, 340.95, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[4456.016, 4456.016, 341.147]}
                    />
                </group>



            </group>

            {/* Lock vertical rotation at 90 degrees (looking straight ahead) */}
            <OrbitControls enableZoom={true} minPolarAngle={Math.PI /2} maxPolarAngle={Math.PI /2}/> 
        </Suspense>
        )
}


useLoader.preload(GLTFLoader, "/models/room1/scene.gltf");

export default ROom1OPTIMIZED