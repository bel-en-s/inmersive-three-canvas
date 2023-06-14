import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { Group, Mesh, MeshStandardMaterial, SphereGeometry, MeshBasicMaterial, TextureLoader } from 'three';

export function Cloud({ opacity, ...props }) {
  const groupRef = useRef();

  const texture = new THREE.TextureLoader().load('scan361.jpg');

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color="blue" opacity={0.5} transparent side={THREE.DoubleSide} wireframe />
      </mesh>
    </group>
  );
}
