import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

/* Geometric face-like structure with neural lines */
function FaceMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.12;
    }
    if (innerRef.current) {
      const s = 0.85 + Math.sin(t * 0.8) * 0.03;
      innerRef.current.scale.set(s, s, s);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Outer wireframe - face-like icosahedron */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.4, 3]} />
          <meshStandardMaterial
            color="hsl(187, 100%, 50%)"
            emissive="hsl(187, 100%, 35%)"
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.7}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Inner solid core */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[0.8, 2]} />
          <meshStandardMaterial
            color="hsl(254, 100%, 69%)"
            emissive="hsl(254, 100%, 50%)"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Neural rings */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            rotation={[
              (Math.PI / 4) * i + 0.3,
              (Math.PI / 3) * i,
              (Math.PI / 6) * i,
            ]}
            scale={1.6 + i * 0.15}
          >
            <torusGeometry args={[1, 0.004, 16, 120]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "hsl(187, 100%, 50%)" : "hsl(254, 100%, 69%)"}
              emissive={i % 2 === 0 ? "hsl(187, 100%, 50%)" : "hsl(254, 100%, 69%)"}
              emissiveIntensity={0.8}
              transparent
              opacity={0.35 - i * 0.06}
            />
          </mesh>
        ))}

        {/* Floating data points */}
        {Array.from({ length: 20 }).map((_, i) => {
          const theta = (i / 20) * Math.PI * 2;
          const r = 1.8 + Math.sin(i * 1.5) * 0.3;
          return (
            <mesh
              key={`pt-${i}`}
              position={[
                Math.cos(theta) * r,
                Math.sin(theta * 0.7) * 0.8,
                Math.sin(theta) * r,
              ]}
            >
              <sphereGeometry args={[0.015, 6, 6]} />
              <meshStandardMaterial
                color="hsl(187, 100%, 50%)"
                emissive="hsl(187, 100%, 50%)"
                emissiveIntensity={2}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleData = useMemo(() => {
    const count = 80;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleData.length / 3}
          array={particleData}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="hsl(187, 100%, 50%)"
        size={0.02}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function MouseParallax() {
  const { camera } = useThree();

  useFrame((state) => {
    const { pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.4 + 0.3, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0.3, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <fog attach="fog" args={["hsl(228, 50%, 6%)", 4, 14]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="hsl(187, 100%, 50%)" />
        <pointLight position={[-4, -2, 3]} intensity={0.6} color="hsl(254, 100%, 69%)" />
        <pointLight position={[0, 3, -4]} intensity={0.3} color="hsl(180, 90%, 55%)" />
        <FaceMesh />
        <Particles />
        <MouseParallax />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
