import Grimace from "./grimace";

export default function Model(props: any) {
  return (
    <group {...props}>
      <Grimace />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
    </group>
  );
}
