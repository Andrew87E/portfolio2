import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface SkillTagCloudProps {
  width?: number;
  height?: number;
  radius?: number;
}

export const SkillTagCloud: React.FC<SkillTagCloudProps> = ({
  width = 375,
  height = 375,
  radius = 27,
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
  const animationFrameId = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);
  const spriteSize = Math.max(radius / 4, 6);

  // Comprehensive list of technologies from your projects
  const icons = [
    // Frontend Core
    { name: "react", color: "#61DAFB" },
    { name: "typescript", color: "#3178C6" },
    { name: "javascript", color: "#F7DF1E" },
    { name: "html5", color: "#E34F26" },
    { name: "css3", color: "#1572B6" },
    { name: "jquery", color: "#0769AD" },

    // Frontend Frameworks & Libraries
    { name: "nextdotjs", color: "#000000" }, // Changed from next.js
    { name: "redux", color: "#764ABC" },
    { name: "framer", color: "#0055FF" }, // Changed from framer motion
    { name: "styledcomponents", color: "#DB7093" },

    // Styling
    { name: "tailwindcss", color: "#06B6D4" },
    { name: "sass", color: "#CC6699" },
    { name: "bootstrap", color: "#7952B3" },
    { name: "bulma", color: "#00D1B2" },

    // Mobile & Cross-platform
    { name: "flutter", color: "#02569B" },
    { name: "swift", color: "#F05138" }, // Using swift instead of swiftui
    { name: "dart", color: "#0175C2" },

    // Backend
    { name: "nodedotjs", color: "#339933" }, // Changed from node.js
    { name: "express", color: "#000000" },
    { name: "graphql", color: "#E10098" },

    // Databases
    { name: "mongodb", color: "#47A248" },
    { name: "postgresql", color: "#4169E1" },
    { name: "redis", color: "#DC382D" },
    { name: "mysql", color: "#4479A1" },
    { name: "microsoftsql", color: "#CC2927" }, // Changed from microsoft sql server

    // Cloud & Deployment
    { name: "docker", color: "#2496ED" },
    { name: "vercel", color: "#000000" },
    { name: "heroku", color: "#430098" },
    { name: "firebase", color: "#FFCA28" },
    { name: "amazonaws", color: "#FF9900" }, // Changed from amazon aws

    // Testing & Development
    { name: "jest", color: "#C21325" },
    { name: "storybook", color: "#FF4785" },
    { name: "vite", color: "#646CFF" },
    { name: "npm", color: "#CB3837" },
    { name: "yarn", color: "#2C8EBB" },

    // Tools & Utilities
    { name: "git", color: "#F05032" },
    { name: "github", color: "#181717" },
    { name: "visualstudiocode", color: "#007ACC" }, // Changed from visual studio code
    { name: "webpack", color: "#8DD6F9" },
    { name: "eslint", color: "#4B32C3" },

    // Extra Technologies
    { name: "threedotjs", color: "#000000" }, // Changed from three.js
    { name: "markdown", color: "#000000" },
    { name: "auth0", color: "#EB5424" },
  ].map((icon) => ({
    ...icon,
    url: `https://cdn.simpleicons.org/${icon.name}/${icon.color.replace("#", "")}`,
  }));

  const filteredIcons = icons.filter((icon) => {
    // List of icons we know exist in the SimpleIcons library
    const validIcons = new Set([
      "react",
      "typescript",
      "javascript",
      "html5",
      "css3",
      "jquery",
      "nextdotjs",
      "redux",
      "framer",
      "styledcomponents",
      "tailwindcss",
      "sass",
      "bootstrap",
      "bulma",
      "flutter",
      "swift",
      "dart",
      "nodedotjs",
      "express",
      "graphql",
      "mongodb",
      "postgresql",
      "redis",
      "mysql",
      "microsoftsql",
      "docker",
      "vercel",
      "heroku",
      "firebase",
      "amazonaws",
      "jest",
      "storybook",
      "vite",
      "npm",
      "yarn",
      "git",
      "github",
      "visualstudiocode",
      "webpack",
      "eslint",
      "threedotjs",
      "markdown",
      "auth0",
    ]);

    return validIcons.has(icon.name);
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(containerRef.current);

    const canvasContainer = containerRef.current;

    renderer.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setSize(width, height);
    canvasContainer.appendChild(renderer.current.domElement);

    camera.current.aspect = width / height;
    camera.current.updateProjectionMatrix();
    camera.current.position.z = radius * 2.2;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.current.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.current.add(pointLight);

    // Load textures with error handling
    const loader = new THREE.TextureLoader();
    icons.forEach((icon, index) => {
      loader.load(
        icon.url,
        (texture) => {
          const phi = Math.acos(-1 + (2 * index) / icons.length);
          const theta = Math.sqrt(icons.length * Math.PI) * phi;

          const sprite = new THREE.Sprite(
            new THREE.SpriteMaterial({
              map: texture,
              transparent: true,
              opacity: 0.9,
              color: new THREE.Color(icon.color),
            })
          );

          sprite.scale.set(spriteSize, spriteSize, 1);
          sprite.position.setFromSphericalCoords(radius, phi, theta);

          sprite.userData = {
            name: icon.name,
            originalScale: spriteSize,
          };

          group.current.add(sprite);
          sprites.current.push(sprite);
        },
        undefined,
        (error) => {
          console.warn(`Failed to load icon for ${icon.name}:`, error);
        }
      );
    });

    scene.current.add(group.current);

    let isHovering = false;
    let rotationSpeed = 0.001;
    const baseRotationSpeed = 0.001;
    const hoverRotationSpeed = 0.0005;
    let mx = 0;
    let my = 0;

    const updateCanvasRect = () => {
      return renderer.current!.domElement.getBoundingClientRect();
    };

    const handleMouseEnter = () => {
      if (!isVisible) return;
      isHovering = true;
      rotationSpeed = hoverRotationSpeed;
    };

    const handleMouseLeave = () => {
      if (!isVisible) return;
      isHovering = false;
      rotationSpeed = baseRotationSpeed;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const canvasRect = updateCanvasRect();
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        mx = ((e.clientX - canvasRect.left) / width - 0.5) * 0.02;
        my = ((e.clientY - canvasRect.top) / height - 0.5) * 0.02;
      }
    };

    canvasContainer.addEventListener("mouseenter", handleMouseEnter);
    canvasContainer.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!renderer.current || !isVisible) return;

      animationFrameId.current = requestAnimationFrame(animate);

      group.current.rotation.y += rotationSpeed + mx;
      group.current.rotation.x += my;

      group.current.children.forEach((sprite) => {
        sprite.lookAt(camera.current.position);
      });

      renderer.current.render(scene.current, camera.current);
    };

    // Start animation only if visible
    if (isVisible) {
      animate();
    }

    return () => {
      if (renderer.current) {
        canvasContainer.removeChild(renderer.current.domElement);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      canvasContainer.removeEventListener("mouseenter", handleMouseEnter);
      canvasContainer.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [icons, width, height, radius, spriteSize, isVisible]);

  return (
    <div
      ref={containerRef}
      className="skill-tag-cloud relative"
      style={{
        width,
        height,
        margin: "0 auto",
      }}
    />
  );
};
