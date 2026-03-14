import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { type ThreeElements, useGraph, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

const correction = new THREE.Quaternion().setFromEuler(
  new THREE.Euler(Math.PI / 2, 0, 0)
);

export default function Model(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/chameleon.glb");

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { camera, pointer } = useThree();

  const head = useMemo(() => nodes.Head, [nodes]);
  useFrame(() => {
    const target = new THREE.Vector3();

    target.set(pointer.x, pointer.y, 0.5)
    target.unproject(camera)

    head.lookAt(target)
    head.quaternion.multiply(correction);
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.165, -0.532]}>
        <primitive object={nodes.Spine} />
        <primitive object={nodes.Tail} />
        <primitive object={nodes.LegL} />
        <primitive object={nodes.LegR} />
        <skinnedMesh
          geometry={(nodes.Chameleon as any).geometry}
          material={materials.Material}
          skeleton={(nodes.Chameleon as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Face as any).geometry}
          material={materials.Face}
          skeleton={(nodes.Face as any).skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/chameleon.glb");
