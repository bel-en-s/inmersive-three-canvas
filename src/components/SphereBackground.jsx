import React from 'react';
import * as THREE from 'three';
import { Group, Mesh, MeshStandardMaterial, SphereGeometry, MeshBasicMaterial, TextureLoader } from 'three';
import { OrbitControls } from "@react-three/drei";
import textureImage from './scan361.jpg';

export function SphereBackground({ opacity, ...props }) {
   // Create a procedural texture
   const texture = new THREE.TextureLoader().load(textureImage);



  return (
    <group {...props}>
       <ambientLight intensity={0.5} />
      <mesh {...props}>
        <OrbitControls/>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial  map={texture} transparent opacity={1} color="white"/>
      </mesh>
    </group>
  );
}
