import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: "ishango",
    title: "Bâton d'Ishango",
    year: "-20 000",
    description:
      "Découvert en RDC, cet os gravé pourrait être l’un des premiers outils mathématiques connus. Il présente des motifs de doublage et des nombres premiers.",
    sketchfabUrl: "https://sketchfab.com/models/3840880170044c589b09afe4847986f8/embed"
  },
  {
    id: "rhind",
    title: "Papyrus de Rhind",
    year: "-1650",
    description:
      "Ce papyrus égyptien contient 84 problèmes de mathématiques liés aux fractions, aux surfaces et volumes. C’est un véritable manuel scolaire de l’Antiquité.",
    sketchfabUrl: null
  },
  {
    id: "baila",
    title: "Village Ba-ila",
    year: "1600s",
    description:
      "Village zambien avec une structure fractale. Vu du ciel, l’ensemble des maisons reproduit la forme de la maison individuelle.",
    sketchfabUrl: null
  }
];

export default function AfricanMathTimeline() {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Frise interactive : Les mathématiques africaines
      </h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] bg-white rounded-xl shadow-md border border-gray-200 p-4"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{item.year}</p>
            <p className="mb-4 text-sm text-gray-700">{item.description}</p>
            {item.sketchfabUrl && (
              <iframe
                title={item.title}
                src={item.sketchfabUrl}
                frameBorder="0"
                width="100%"
                height="200"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
