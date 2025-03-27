import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MTLLoader, OBJLoader } from "three-stdlib";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CameraControls() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    return () => controls.dispose();
  }, [camera, gl]);
  return null;
}

function Model() {
  const ref = useRef();
  const [object, setObject] = useState();

  useEffect(() => {
    new MTLLoader()
      .setPath("/models/Final_Ishango/")
      .load("Final_Ishango.mtl", (materials) => {
        materials.preload();
        new OBJLoader()
          .setMaterials(materials)
          .setPath("/models/Final_Ishango/")
          .load("Final_Ishango.obj", (obj) => {
            obj.scale.set(0.015, 0.015, 0.015);
            setObject(obj);
          });
      });
  }, []);

  return object ? <primitive object={object} ref={ref} /> : null;
}

export default function IshangoViewer() {
  return (
    <div style={{ height: 400, borderRadius: "12px", overflow: "hidden", marginTop: "2rem" }}>
      <Canvas camera={{ position: [1, 1, 2] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <CameraControls />
      </Canvas>
    </div>
  );
}
