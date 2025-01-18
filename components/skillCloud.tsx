import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface SkillTagCloudProps {
  width?: number; // Width of the canvas
  height?: number; // Height of the canvas
  radius?: number; // Radius of the sphere
}

export const SkillTagCloud: React.FC<SkillTagCloudProps> = ({
  width = 375, // Default canvas width
  height = 375, // Default canvas height
  radius = 27, // Default radius
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(
    new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  );
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const group = useRef(new THREE.Group());
  const raycaster = useRef(new THREE.Raycaster());
  const sprites = useRef<THREE.Sprite[]>([]);
  const spriteSize = 8;

  const icons: string[] = [
    "arduino",
    "azure",
    "bootstrap",
    "chrome",
    "css",
    "express",
    "figma",
    "git",
    "github",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "nextjs",
    "nodejs",
    "photoshop",
    "python",
    "react",
    "rpi",
    "sass",
    "sql",
    "typescript",
    "vscode",
  ].map((icon) => `/assets/${icon}.svg`);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvasContainer = containerRef.current;

    // Set up renderer with alpha for transparency
    renderer.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Enables transparency
    });
    renderer.current.setSize(width, height);
    canvasContainer.appendChild(renderer.current.domElement);

    // Set up camera
    camera.current.aspect = width / height;
    camera.current.updateProjectionMatrix();
    camera.current.position.z = radius * 2; // Position camera based on the radius

    // Load textures and create sprites
    const loader = new THREE.TextureLoader();
    icons.forEach((path, index) => {
      loader.load(path, (texture) => {
        const phi = Math.acos(-1 + (2 * index) / icons.length);
        const theta = Math.sqrt(icons.length * Math.PI) * phi;

        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: texture })
        );
        sprite.scale.set(spriteSize, spriteSize, 1);
        sprite.position.set(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        );
        group.current.add(sprite);
        sprites.current.push(sprite);
        sprite.addEventListener("hover", () => {
          console.log("hovered");
        });
      });
    });

    scene.current.add(group.current);

    // Handle canvas resizing and scrolling
    let canvasRect = renderer.current.domElement.getBoundingClientRect();
    const updateCanvasRect = () => {
      canvasRect = renderer!.current!.domElement.getBoundingClientRect();
    };

    window.addEventListener("scroll", updateCanvasRect);
    window.addEventListener("resize", updateCanvasRect);

    // Handle raycasting on click
    const handleClick = (e: MouseEvent) => {
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        const mouse = new THREE.Vector2(
          (2 * (e.clientX - canvasRect.left)) / width - 1,
          -(2 * (e.clientY - canvasRect.top)) / height + 1
        );
        raycaster.current.setFromCamera(mouse, camera.current);
        const intersects = raycaster.current.intersectObjects(sprites.current);
        if (intersects.length > 0) {
          group.current.attach(intersects[0].object);
        }
      }
    };
    window.addEventListener("click", handleClick);

    // Handle mouse movement
    let mx = 0;
    let my = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        mx = (0.01 * (e.clientX - canvasRect.left)) / width - 1;
        my = (2 * -(e.clientY - canvasRect.top)) / height + 1;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop with slower rotation speed
    const animate = () => {
      if (!renderer.current) return;
      requestAnimationFrame(animate);

      // Adjust rotation speed (smaller values for slower rotation)
      group.current.rotation.y += 0.002 + mx * 0.01;
      group.current.rotation.x += my * 0.01;

      group.current.children.forEach((sprite) =>
        sprite.lookAt(camera.current.position)
      );
      renderer.current.render(scene.current, camera.current);
    };
    animate();

    // Cleanup
    return () => {
      if (renderer.current) {
        canvasContainer.removeChild(renderer.current.domElement);
      }
      window.removeEventListener("scroll", updateCanvasRect);
      window.removeEventListener("resize", updateCanvasRect);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [icons, width, height, radius]);

  return (
    <div
      ref={containerRef}
      className="skill-tag-cloud"
      style={{ width, height }}
    ></div>
  );
};
