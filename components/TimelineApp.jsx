
import React, { useState } from "react";
import IshangoViewer from "./IshangoViewer";

const timelineData = [
  {
    title: "Os d’Ishango",
    date: "~20 000 av. J.-C.",
    description: "Premier objet mathématique connu. Bâton gravé découvert en RDC.",
    model: <IshangoViewer />
  },
  {
    title: "Papyrus de Rhind",
    date: "~1650 av. J.-C.",
    description: "Ancien manuel égyptien de géométrie et d’arithmétique.",
    model: null
  },
  {
    title: "Village Ba-ila (Zambie)",
    date: "XVIe siècle",
    description: "Village organisé en fractale : chaque maison a la même forme que le village.",
    model: null
  }
];

export default function TimelineApp() {
  const [selected, setSelected] = useState(timelineData[0]);

  return (
    <div className="min-h-screen bg-[#fff8f1] p-6 font-sans">
      <h1 className="text-3xl font-bold text-[#d63b1b] mb-2">📜 Frise Mathématique Africaine</h1>
      <p className="text-base mb-6">Explorez les grandes découvertes mathématiques d’Afrique à travers les siècles.</p>

      <div className="bg-[#f19b3f] p-4 rounded-xl mb-6">
        <h2 className="text-lg font-semibold">📌 {selected.title}</h2>
        <p className="text-sm text-[#683c11]">{selected.date}</p>
        <p className="mt-2">{selected.description}</p>
        {selected.model && <div className="mt-4">{selected.model}</div>}
      </div>

      <div className="flex space-x-4 overflow-x-auto border-t border-[#d48d5b] pt-4">
        {timelineData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(item)}
            className={`min-w-[160px] p-3 rounded-lg shadow-md transition-colors duration-300 text-left hover:bg-[#d63b1b] hover:text-white ${
              selected.title === item.title ? "bg-[#d63b1b] text-white" : "bg-white"
            }`}
          >
            <div className="text-sm font-semibold">{item.title}</div>
            <div className="text-xs text-[#683c11]">{item.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
