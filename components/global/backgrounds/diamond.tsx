import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, PointLight, AmbientLight } from "three";
import {
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  MeshBasicMaterial,
  OctahedronGeometry,
} from "three";

const Diamond: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={"skyblue"} transparent opacity={0.5} />
      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[new OctahedronGeometry(1, 0)]}
        />
        <lineBasicMaterial color={"white"} attach="material" />
      </lineSegments>
    </mesh>
  );
};

export const DiamondView: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Diamond />
    </Canvas>
  );
};
