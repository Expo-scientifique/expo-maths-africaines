import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const events = [
  {
    id: "ishango",
    year: "-20 000",
    title: "Bâton d'Ishango",
    description:
      "Découvert en RDC, cet os gravé est considéré comme l’un des premiers outils mathématiques. Il montre des motifs de doublage et des nombres premiers.",
    show3D: true,
  },
  {
    id: "rhind",
    year: "-1650",
    title: "Papyrus de Rhind",
    description:
      "Ce papyrus égyptien contient 84 problèmes de géométrie, de fractions et de calculs. C’est un manuel scolaire mathématique de l’Égypte antique.",
    show3D: false,
  },
];

function IshangoModel() {
  const [object, setObject] = React.useState();
  React.useEffect(() => {
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

export default function TimelineApp() {
  const [selected, setSelected] = useState(events[0]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex p-4 gap-4">
        <div className="w-1/2 bg-white rounded-xl shadow-md p-6 border border-[#d48d5b]">
          <h2 className="text-2xl font-bold text-[#d63b1b] mb-2">{selected.title}</h2>
          <p className="text-[#683c11]">{selected.description}</p>
        </div>
        <div className="w-1/2 rounded-xl overflow-hidden border border-[#d48d5b] bg-white">
          {selected.show3D ? (
            <Canvas camera={{ position: [1, 1, 2] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <Stage>
                <IshangoModel />
              </Stage>
              <OrbitControls />
            </Canvas>
          ) : (
            <div className="flex items-center justify-center h-full text-[#683c11]">
              📜 Aperçu non disponible en 3D
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 py-4 bg-[#f19b3f]">
        {events.map((e) => (
          <button
            key={e.id}
            onClick={() => setSelected(e)}
            className={`px-4 py-2 rounded-full font-semibold ${
              selected.id === e.id ? "bg-[#683c11] text-white" : "bg-white text-[#683c11]"
            }`}
          >
            {e.year}
          </button>
        ))}
      </div>
    </div>
  );
}
