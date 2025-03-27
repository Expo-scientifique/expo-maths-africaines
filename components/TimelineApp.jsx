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
    <div style={{ backgroundColor: '#fff8f1', padding: '2rem', fontFamily: 'Segoe UI' }}>
      <h1 style={{ color: '#d63b1b', fontSize: '28px' }}>📜 Frise Mathématique Africaine</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', position: 'relative' }}>
        {timelineItems.map((item, index) => (
          <div key={index} style={{ width: '30%', textAlign: 'center' }}>
            <div style={{
              background: '#d63b1b',
              width: '10px',
              height: '60px',
              margin: '0 auto',
              borderRadius: '8px'
            }}></div>
            <h2 style={{ color: '#683c11', marginTop: '1rem' }}>{item.title}</h2>
            <p style={{ fontSize: '14px', color: '#333' }}>{item.date}</p>
            <p style={{ fontSize: '13px' }}>{item.description}</p>
            <ModelViewer modelPath={item.modelPath} />
          </div>
        ))}
      </div>
    </div>
  );
}
