import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkLines() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 30; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3
        )
      );
    }
    return pts;
  }, []);

  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.5) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="hsl(200, 95%, 55%)"
            emissive="hsl(200, 95%, 55%)"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
      {connections.map(([a, b], i) => {
        const points = [a, b];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: "hsl(250, 85%, 65%)", transparent: true, opacity: 0.2 }))} />
        );
      })}
    </group>
  );
}

const layers = [
  { label: "Data Ingestion", desc: "Multi-modal input processing" },
  { label: "Neural Processing", desc: "Distributed transformer inference" },
  { label: "Knowledge Graph", desc: "Contextual memory architecture" },
  { label: "API Gateway", desc: "Low-latency response delivery" },
];

export default function Platform() {
  return (
    <section className="relative py-32 section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Architecture
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Built for Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A modular, distributed architecture designed to handle billions of operations per second.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] glass-panel overflow-hidden"
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.4} />
              <pointLight position={[3, 3, 3]} intensity={0.8} color="hsl(250, 85%, 65%)" />
              <NetworkLines />
            </Canvas>
          </motion.div>

          {/* Architecture layers */}
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel-hover p-6 flex items-center gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-display font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {layer.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{layer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
