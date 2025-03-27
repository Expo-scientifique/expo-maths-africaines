import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CameraControls() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    return () => controls.dispose();
  }, []);
  return null;
}

function Model({ path }) {
  const ref = useRef();
  const [object, setObject] = useState();

  useEffect(() => {
    new OBJLoader()
      .setPath(path)
      .load("model.obj", (obj) => {
        obj.scale.set(0.015, 0.015, 0.015);
        setObject(obj);
      });
  }, [path]);

  return object ? <primitive object={object} ref={ref} /> : null;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div style={{ height: 300, marginTop: 20 }}>
      <Canvas camera={{ position: [1, 1, 2] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model path={modelPath} />
        </Suspense>
        <CameraControls />
      </Canvas>
    </div>
  );
}
