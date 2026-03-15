import { useGLTF } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber/dist/declarations/src";
import React from "react";
import { SkeletonUtils } from "three-stdlib";

export default function Model(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/shiba.glb");

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  return (
    <group {...props} dispose={null}>
      <group>
        <primitive object={nodes.Body_1} />
        <skinnedMesh
          geometry={(nodes.Body as any).geometry}
          material={materials.Fur}
          skeleton={(nodes.Body as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.BottomMouth_1 as any).geometry}
          material={materials.Fur}
          skeleton={(nodes.BottomMouth_1 as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Ears as any).geometry}
          material={materials.Fur}
          skeleton={(nodes.Ears as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Head_1 as any).geometry}
          material={materials.Fur}
          skeleton={(nodes.Head_1 as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Nose as any).geometry}
          material={materials.Nose}
          skeleton={(nodes.Nose as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.TopMouth as any).geometry}
          material={materials.Fur}
          skeleton={(nodes.TopMouth as any).skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/shiba.glb");
