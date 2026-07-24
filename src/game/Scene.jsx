import { Canvas } from "@react-three/fiber";

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#4CAF50" />
    </mesh>
  );
}

function Cube() {
  return (
    <mesh position={[0, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={2}
        castShadow
      />
    </>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 6],
        fov: 75
      }}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#87CEEB"
      }}
    >
      <Lights />
      <Ground />
      <Cube />
    </Canvas>
  );
}
