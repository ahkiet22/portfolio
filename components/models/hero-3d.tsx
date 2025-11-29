"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TinyIsometricRoom } from "../tiny_isometric_room";
import { Room } from "./Room";
import { HeroLights } from "./HeroLights";
import { GlowingButton } from "./GlowingButton";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Hero3D = () => {
  const [spot1, setSpot1] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const isTablet = useMediaQuery({ minWidth: 400, maxWidth: 1024 });

  const playToggleOn = () => {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.type = "triangle";
    osc.frequency.setValueAtTime(1200, audioContext.currentTime);

    gain.gain.setValueAtTime(0.15, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.05
    );

    osc.start(audioContext.currentTime);
    osc.stop(audioContext.currentTime + 0.05);
  };

  const playToggleOff = () => {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.type = "triangle";
    osc.frequency.setValueAtTime(800, audioContext.currentTime);

    gain.gain.setValueAtTime(0.12, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.06
    );

    osc.start(audioContext.currentTime);
    osc.stop(audioContext.currentTime + 0.06);
  };

  const playToggleSound = () => {
    if (spot1) {
      playToggleOff();
    } else {
      playToggleOn();
    }
  };


  return (
    <Canvas camera={{ position: [0, 30, 50], fov: 45 }} className="cursor-grab">
      <HeroLights spot1={spot1} enabled={enabled} />

      <OrbitControls
        enablePan={false} // Tắt pan, chỉ cho phép xoay và zoom
        enableZoom={!isTablet} // Tắt zoom trên tablet
        maxDistance={100} // Khoảng cách tối đa camera có thể di chuyển
        minDistance={50} // Khoảng cách tối thiểu camera có thể di chuyển
        maxPolarAngle={Math.PI / 4} // Giới hạn góc xoay camera theo chiều dọc
        minPolarAngle={Math.PI / 3} // Giới hạn góc xoay camera theo chiều dọc
        // maxAzimuthAngle={Math.PI / 4}
        // minAzimuthAngle={-Math.PI / 4}
      />

      {/* Đặt TinyIsometricRoom trong nhóm và xoay nhóm */}
      <group position={[0, -8, 0]} scale={isTablet ? 0.8 : 1} rotation={[0, -Math.PI / 4, 0]}>
        <Room />
        <GlowingButton
          position={[10, 15, -11.2]}
          onClick={() => {
            setSpot1(!spot1);
            playToggleSound();
          }}
        />
        <GlowingButton
          position={[8, 15, -11.2]}
          onClick={() => setEnabled(!enabled)}
        />
      </group>
    </Canvas>
  );
};
