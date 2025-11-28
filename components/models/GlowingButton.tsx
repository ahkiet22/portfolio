import { useState } from "react";

interface GlowingButtonProps {
  position?: [x: number, y: number, z: number];
  onClick?: () => void;
}

export function GlowingButton({
  position = [0, 0, 0],
  onClick,
}: GlowingButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <group position={position}>
      <mesh
        scale={active ? 1.1 : 1} // phóng to khi click
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setActive(true)}
        onPointerUp={() => {
          setActive(false);
          onClick?.();
        }}
        onClick={() => onClick?.()}
        // đổi cursor
        onPointerMove={(e) => {
          document.body.style.cursor = hovered ? "pointer" : "auto";
        }}
      >
        <boxGeometry args={[0.5, 0.3, 0.05]} />
        <meshStandardMaterial
          color={hovered ? "orange" : "red"}
          emissive={hovered ? "orange" : "red"}
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Ánh sáng phát ra môi trường */}
      <pointLight
        color={hovered ? "orange" : "red"}
        intensity={2}
        distance={2}
        decay={2}
      />
    </group>
  );
}

// export default function Scene() {
//   return (
//     <Canvas shadows camera={{ position: [0, 1, 3], fov: 50 }}>
//       <ambientLight intensity={0.3} />
//       <OrbitControls />

//       <GlowingButton
//         position={[0, 0.5, 0]}
//         onClick={() => console.log("Button clicked!")}
//       />
//     </Canvas>
//   );
// }
