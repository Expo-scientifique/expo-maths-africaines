import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MTLLoader, OBJLoader } from "three-stdlib";

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
        <OrbitControls />
      </Canvas>
    </div>
  );
}
