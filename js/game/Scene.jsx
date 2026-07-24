import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 75 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={2} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
