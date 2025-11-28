import React from "react";

type HeroLightsProps = {
  enabled?: boolean; // bật/tắt toàn bộ ánh sáng
  spot1?: boolean; // bật/tắt spotlight 1
  spot2?: boolean; // bật/tắt spotlight 2
  ambient?: boolean; // bật/tắt ambient light
  directional?: boolean; // bật/tắt directional light
};

export const HeroLights: React.FC<HeroLightsProps> = ({
  enabled = true,
  spot1 = true,
  spot2 = true,
  ambient = true,
  directional = true,
}) => {
  if (!enabled) return null;

  return (
    <>
      {spot1 && (
        <spotLight position={[10, 10, 30]} angle={0.08} intensity={600} />
      )}

      {spot2 && (
        <spotLight
          position={[10, 10, -8]}
          angle={0.4}
          intensity={200}
          castShadow
        />
      )}

      {/* {ambient && <ambientLight intensity={0.3} color={"#1a1a"} />}

      {directional && <directionalLight position={[5, 5, 5]} intensity={1} />} */}

      <spotLight
        position={[0, 30, 5]}
        angle={0.4}
        intensity={600}
        penumbra={1}
        color={"#9d4edd"}
      />
      <spotLight
        position={[-10, 20, 20]}
        angle={0.4}
        intensity={600}
        penumbra={1}
        color={"#4cc9f0"}
      />
      <spotLight
        position={[-20, 20, 30]}
        angle={1}
        intensity={900}
        penumbra={1}
        color={"#661DFA"}
      />
    </>
  );
};
