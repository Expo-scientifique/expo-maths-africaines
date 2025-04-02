import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

function Model() {
  const [object, setObject] = useState();

  useEffect(() => {
    const basePath = "/models/Final_Ishango/";

    const mtlLoader = new MTLLoader();
    mtlLoader.setPath(basePath);
    mtlLoader.load("Final_Ishango.mtl", (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath(basePath);
      objLoader.load("Final_Ishango.obj", (obj) => {
        setObject(obj);
      });
    });
  }, []);

  return object ? <primitive object={object} /> : null;
}

export default function IshangoViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
