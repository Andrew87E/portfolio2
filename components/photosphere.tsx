import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface TexturedSphereProps {
  width?: number;
  height?: number;
  rotationSpeed?: number;
}

export const TexturedSphere: React.FC<TexturedSphereProps> = ({
  width = 800,
  height = 600,
  rotationSpeed = 0.002,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentRef = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    currentRef.appendChild(renderer.domElement);

    // Add ambient light with increased intensity
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // Add directional light with adjusted position
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);

    // Add point light for better illumination
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(-2, 1, 2);
    scene.add(pointLight);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(5, 32, 32); // radius, widthSegments, heightSegments

    // Load texture with error handling
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "/images/Dada.jpg",
      (loadedTexture: THREE.Texture) => {
        loadedTexture.wrapS = THREE.RepeatWrapping;
        loadedTexture.wrapT = THREE.RepeatWrapping;
        loadedTexture.repeat.set(4, 3);
        loadedTexture.offset.set(0, 0);
        console.log("Texture loaded successfully");
      },
      undefined,
      (error) => console.error("Error loading texture:", error)
    );

    // Create material and mesh
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.5,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.scale.set(1, 1, 1);
    sphere.rotation.y = Math.PI;
    scene.add(sphere);

    // Position camera
    camera.position.z = 11;

    // Animation Rotate
    const animate = () => {
      if (!scene) return;

      requestAnimationFrame(animate);
      sphere.rotation.y += rotationSpeed;
      renderer.render(scene, camera);
    };
    animate();

    // Render once without animation
    // renderer.render(scene, camera); // this doesnt work

    // Handle window resize
    const handleResize = () => {
      if (!currentRef || !renderer) return;

      const newWidth = currentRef.clientWidth;
      const newHeight = currentRef.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial size

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [width, height, rotationSpeed]);

  return (
    <div
      ref={mountRef}
      className="w-full h-96 bg-gray-800"
      data-testid="textured-sphere-container"
    />
  );
};
