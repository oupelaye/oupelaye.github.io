import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model(props: ThreeElements["group"]) {
  const { scene } = useGLTF("./models/grimace.glb");
  const groupRef = useRef<THREE.Group>(null);
  const rotationFinished = useRef(false);

  useFrame((_, delta) => {
    if (groupRef.current && !rotationFinished.current) {
      groupRef.current.rotation.y += delta * 4;

      if (groupRef.current.rotation.y >= Math.PI * 2) {
        groupRef.current.rotation.z = 0;
        rotationFinished.current = true;
      }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} rotation={[0, 0, 0]} />
    </group>
  );
}

useGLTF.preload("./models/grimace.glb");
