import React from 'react';
import './MathAfriqueThroughTime.css';

export default function MathAfriqueThroughTime() {
  return (
    <div className="interface-container">
      <header className="african-pattern-header">
        <h1 className="text-3xl text-white font-bold text-center p-4">
          Mathématiques Africaines à Travers les Âges
        </h1>
        <p className="text-white text-center pb-4">
          Une interface interactive pour découvrir les apports mathématiques africains.
        </p>
      </header>
      <main className="p-4">
        <section className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-amber-700">Carte et Frise à venir</h2>
          <p className="text-gray-700 mt-2">
            (L'interface complète avec frise chronologique, carte interactive et contenu culturel sera ici)
          </p>
        </section>
      </main>
    </div>
  );
}