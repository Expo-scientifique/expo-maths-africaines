import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: "ishango",
    title: "Bâton d'Ishango",
    year: "-20 000",
    description:
      "Découvert en RDC, cet os gravé est considéré comme l’un des premiers outils mathématiques. Il montre des motifs de doublage et des nombres premiers.",
    imageUrl: "/images/ishango.jpg"
  },
  {
    id: "rhind",
    title: "Papyrus de Rhind",
    year: "-1650",
    description:
      "Ce papyrus égyptien est un manuel de mathématiques anciennes contenant des problèmes de géométrie, d’aires, de volumes et de fractions unitaires.",
    imageUrl: "/images/rhind.jpg"
  },
  {
    id: "baila",
    title: "Village Ba-ila",
    year: "1600s",
    description:
      "Village de Zambie dont la structure présente un motif fractal : la disposition des maisons reproduit la forme d’une maison individuelle.",
    imageUrl: "/images/baila.jpg"
  }
];

export default function App() {
  const [active, setActive] = useState(null);
  const [zoomed, setZoomed] = useState(null);

  return (
    <div className="bg-[#fff8f1] min-h-screen font-sans">
      <h1 className="text-3xl text-center font-bold py-6 text-[#683c11]">
        Frise interactive : Les mathématiques africaines
      </h1>

      <div className="relative w-full overflow-x-auto px-4 py-6">
        <div className="h-1 bg-[#d48d5b] absolute top-1/2 left-0 right-0" />
        <div className="flex gap-12 relative z-10 justify-start px-4">
          {data.map((event) => (
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
            {event.imageUrl && (
              <div className="overflow-hidden rounded-xl border cursor-zoom-in" onClick={() => setZoomed(event.imageUrl)}>
                <img src={event.imageUrl} alt={event.title} className="w-full h-auto rounded-xl" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(null)}
          >
            <img src={zoomed} alt="Zoom" className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
