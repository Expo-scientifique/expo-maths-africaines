import React from "react";

import IshangoViewer from './IshangoViewer';

export default function TimelineApp() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ color: "#d63b1b" }}>📜 Frise Mathématique Africaine</h1>
      <p>
        Bienvenue à l'exposition interactive sur les grandes découvertes et objets 
        mathématiques d'Afrique.
      </p>
      <div style={{ marginTop: "2rem", background: "#f19b3f", padding: "1rem", borderRadius: "12px" }}>
        <strong>🔢 Exemple :</strong> L’os d’Ishango (~20 000 av. J.-C.) est considéré comme 
        un des plus anciens objets mathématiques au monde.
        <IshangoViewer />
</div>
      <IshangoViewer />
</div>
  );
}
