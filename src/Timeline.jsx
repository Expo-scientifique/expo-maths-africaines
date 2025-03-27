import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: "ishango",
    title: "Bâton d'Ishango",
    year: "-20 000",
    description:
      "Découvert en RDC, cet os gravé est considéré comme l’un des premiers outils mathématiques. Il montre des motifs de doublage et des nombres premiers.",
    sketchfabUrl: "https://sketchfab.com/models/3840880170044c589b09afe4847986f8/embed"
  },
  {
    id: "rhind",
    title: "Papyrus de Rhind",
    year: "-1650",
    description:
      "Ce papyrus égyptien est un manuel de mathématiques anciennes contenant des problèmes de géométrie, d’aires, de volumes et de fractions unitaires.",
    sketchfabUrl: null
  },
  {
    id: "baila",
    title: "Village Ba-ila",
    year: "1600s",
    description:
      "Village de Zambie dont la structure présente un motif fractal : la disposition des maisons reproduit la forme d’une maison individuelle.",
    sketchfabUrl: null
  }
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-[#fff8f1] min-h-screen font-sans">
      <h1 className="text-3xl text-center font-bold py-6 text-[#683c11]">
        Frise interactive : Les mathématiques africaines
      </h1>

      <div className="relative w-full overflow-x-auto px-4 py-6">
        <div className="h-1 bg-[#d48d5b] absolute top-1/2 left-0 right-0" />
        <div className="flex gap-12 relative z-10 justify-start px-4">
          {data.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive(event.id)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-6 h-6 rounded-full bg-[#d63b1b] mb-2 border-4 border-[#fff8f1]" />
              <p className="text-sm text-[#683c11] font-semibold">{event.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {data.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: active === event.id ? 1 : 0, y: active === event.id ? 0 : 10 }}
            transition={{ duration: 0.4 }}
            className={`transition-all ${
              active === event.id ? "block" : "hidden"
            } bg-white rounded-2xl shadow-md border border-[#d48d5b] p-6 mb-6`}
          >
            <h2 className="text-2xl font-bold text-[#d63b1b] mb-2">{event.title}</h2>
            <p className="text-[#683c11] mb-4">{event.description}</p>
            {event.sketchfabUrl && (
              <div className="overflow-hidden rounded-xl border">
                <iframe
                  title={event.title}
                  src={event.sketchfabUrl}
                  frameBorder="0"
                  width="100%"
                  height="300"
                  allow="autoplay; fullscreen; vr"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                ></iframe>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
