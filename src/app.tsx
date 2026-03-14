import { Canvas } from "@react-three/fiber";

import Chameleon from "./models/chameleon";

export default function App() {
  return (
    <>
      <div className="absolute w-full h-full">
        <Canvas camera={{ position: [-2, 0.5, 2], rotation: [0, -Math.PI / 2.4, 0], fov: 60 }}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Chameleon />
        </Canvas>
      </div>
      <div className="p-8">
        <h1 className="text-5xl text-center font-bold text-neutral-50">Oupelaye Studio</h1>
      </div>
    </>
  );
}
