import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import * as THREE from "three";

function Model() {
  const [object, setObject] = useState();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("/models/Final_Ishango/");
    mtlLoader.load("Final_Ishango.mtl", (materials) => {
      materials.preload();
      const loader = new OBJLoader();
      loader.setMaterials(materials);
      loader.setPath("/models/Final_Ishango/");
      loader.load("Final_Ishango.obj", (obj) => {
        obj.scale.set(0.01, 0.01, 0.01);
        setObject(obj);
      });
    });
  }, []);

  return object ? <primitive object={object} /> : null;
}

export default function IshangoViewer() {
  return (
    <div style={{ height: '100vh', background: '#fff8f1' }}>
      <Canvas camera={{ position: [1, 1, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Stage>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
