import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

import Shiba from "./shiba";

export default function Model(props: ThreeElements["group"]) {
  const { nodes } = useGLTF("/models/shiba_layout.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <Shiba
          position={nodes.Shiba.position}
          rotation={nodes.Shiba.rotation}
        />

        <spotLight
          position={nodes.Spot.position}
          rotation={nodes.Spot.rotation}
          intensity={3.0}
          color={(nodes.Spot as any).color}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/shiba_layout.glb");
