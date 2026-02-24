import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("hsl(250, 85%, 65%)") },
      uColor2: { value: new THREE.Color("hsl(200, 95%, 55%)") },
    }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    uniforms.uTime.value = t;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = -t * 0.1;
      const s = 1.8 + Math.sin(t * 0.5) * 0.1;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Core sphere */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial
            color="hsl(250, 85%, 65%)"
            emissive="hsl(250, 85%, 45%)"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        {/* Inner solid core */}
        <mesh scale={0.7}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="hsl(200, 95%, 55%)"
            emissive="hsl(200, 95%, 40%)"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Outer glow shell */}
        <mesh ref={glowRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="hsl(270, 80%, 70%)"
            emissive="hsl(270, 80%, 50%)"
            emissiveIntensity={0.3}
            roughness={0.5}
            metalness={0.5}
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Orbiting rings */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[Math.PI / 3 * i, Math.PI / 4 * i, 0]} scale={1.4 + i * 0.2}>
            <torusGeometry args={[1, 0.005, 16, 100]} />
            <meshStandardMaterial
              color="hsl(200, 95%, 55%)"
              emissive="hsl(200, 95%, 55%)"
              emissiveIntensity={0.8}
              transparent
              opacity={0.4 - i * 0.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function MouseParallax() {
  const { camera } = useThree();

  useFrame((state) => {
    const { pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.3 + 0.5, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3DCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <fog attach="fog" args={["hsl(230, 25%, 4%)", 4, 12]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="hsl(250, 85%, 65%)" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="hsl(200, 95%, 55%)" />
        <pointLight position={[0, 3, -5]} intensity={0.3} color="hsl(270, 80%, 70%)" />
        <NeuralCore />
        <MouseParallax />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
