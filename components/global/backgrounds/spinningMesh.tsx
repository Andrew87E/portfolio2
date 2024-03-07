import { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Mesh, Color, MeshBasicMaterial } from "three";
import { useEffect } from "react";

// This component enhances color brightness and saturation
const MovingShape = ({
  position,
  color,
  args,
  speed,
}: {
  position: [number, number, number];
  color: Color | string | number; // Allow color input as Color, string, or number
  args: [number, number, number];
  speed: number;
}) => {
  const mesh = useRef<Mesh>(null!);

  // Enhance color brightness and saturation
  const enhancedColor = new Color(color).convertSRGBToLinear();
  enhancedColor.multiplyScalar(1.4); // Increase this value for more brightness

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.position.x +=
        Math.sin(state.clock.getElapsedTime() * speed) * delta;
      mesh.current.position.y +=
        Math.cos(state.clock.getElapsedTime() * speed) * delta;
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={enhancedColor}
        emissive={enhancedColor}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
};

export const AnimatedBackground: React.FC = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <MovingShape
        position={[-2, 0, 0]}
        color={0xed11b9}
        args={[2, 2, 2]}
        speed={0.5}
      />
      <MovingShape
        position={[2, 2, -2]}
        color={0x01f8fd}
        args={[3, 3, 3]}
        speed={0.7}
      />
      <MovingShape
        position={[0, -2, 2]}
        color={0x0b86b9}
        args={[1.5, 1.5, 1.5]}
        speed={0.8}
      />
      <MovingShape
        position={[-2, -2, -1]}
        color={0xd3017e}
        args={[1.5, 1.5, 1]}
        speed={1}
      />
    </Canvas>
  );
};
