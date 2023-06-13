import React from 'react';
import * as THREE from 'three';
import { Group, Mesh, MeshStandardMaterial, SphereGeometry, MeshBasicMaterial, TextureLoader } from 'three';


export function Cloud({ opacity, ...props }) {
  const texture = new THREE.TextureLoader().load('scan361.jpg'); 

  return (
    <group {...props} dispose={null}>
       <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="blue" opacity={0.5} transparent side={THREE.DoubleSide} wireframe/>
      </mesh>
    </group>
  );
}
