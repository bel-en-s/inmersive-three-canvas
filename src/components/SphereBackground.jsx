import React, { useRef } from 'react';
import * as THREE from 'three';
import { Group, Mesh, MeshStandardMaterial, SphereBufferGeometry, TextureLoader } from 'three';
import { OrbitControls } from "@react-three/drei";
import { useFrame } from 'react-three-fiber';
import textureImage from './scan361.jpg';

export function SphereBackground({ opacity, ...props }) {
  const groupRef = useRef();

  const texture = new THREE.TextureLoader().load(textureImage);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
    }
  });

  return (
    <group {...props}>
      <ambientLight intensity={0.5} />
      <mesh ref={groupRef} {...props}>
        <sphereBufferGeometry args={[2, 32, 32]} />
        <meshStandardMaterial map={texture} transparent opacity={1} color="white" />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
    </group>
  );
}
