import React from "react";
import ModelViewer from "./ModelViewer";

const timelineItems = [
  {
    title: "Os d’Ishango",
    date: "~20 000 av. J.-C.",
    description: "Premier objet mathématique connu. Découvert en RDC.",
    modelPath: "/models/Ishango/"
  },
  {
    title: "Papyrus de Rhind",
    date: "~1650 av. J.-C.",
    description: "Manuel mathématique de l’Égypte antique.",
    modelPath: "/models/Papyrus/"
  },
  {
    title: "Village Ba-ila",
    date: "XVIe siècle",
    description: "Architecture fractale en Zambie.",
    modelPath: "/models/Village/"
  }
];

export default function TimelineApp() {
  return (
    <div style={{ backgroundColor: '#fff8f1', padding: '2rem' }}>
      <h1 style={{ color: '#d63b1b', fontSize: '28px', textAlign: 'center' }}>
        📜 Frise Mathématique Africaine
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '3rem', borderTop: '6px solid #f19b3f', paddingTop: '2rem' }}>
        {timelineItems.map((item, index) => (
          <div key={index} style={{ textAlign: 'center', width: '30%' }}>
            <div style={{ width: '16px', height: '16px', background: '#d63b1b', borderRadius: '50%', margin: '0 auto' }}></div>
            <h2 style={{ color: '#683c11', marginTop: '1rem' }}>{item.title}</h2>
            <p style={{ fontSize: '14px', color: '#333' }}>{item.date}</p>
            <p style={{ fontSize: '13px', minHeight: 40 }}>{item.description}</p>
            <ModelViewer modelPath={item.modelPath} />
          </div>
        ))}
      </div>
    </div>
  );
}
