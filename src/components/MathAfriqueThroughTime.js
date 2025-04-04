import React, { useState } from 'react';
import './MathAfriqueThroughTime.css';
import data from '../data/mathElementsData';
import { formatDate, getPositionOnTimeline } from '../utils/timelineFunctions';

export default function MathAfriqueThroughTime() {
  const [selectedItem, setSelectedItem] = useState(null);

  const oldestDate = Math.min(...data.map(item => parseInt(item.date)));
  const newestDate = Math.max(...data.map(item => parseInt(item.date)));
  const timeRange = newestDate - oldestDate;

  return (
    <div className="interface-container">
      <header className="african-pattern-header">
        <h1 className="text-3xl text-white font-bold text-center p-4">
          Mathématiques Africaines à Travers les Âges
        </h1>
        <p className="text-white text-center pb-4">
          Découvrez l'héritage mathématique africain à travers une frise interactive
        </p>
      </header>
      <main className="p-4">
        <section className="timeline bg-white p-4 rounded shadow-md relative">
          <div className="line bg-amber-600 h-2 rounded-full relative mb-6"></div>
          {data.map(item => (
            <div
              key={item.id}
              className="dot absolute w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow cursor-pointer hover:scale-110 transition"
              style={{ left: getPositionOnTimeline(parseInt(item.date), oldestDate, timeRange) + "%" }}
              title={item.title}
              onClick={() => setSelectedItem(item)}
            ></div>
          ))}
        </section>

        {selectedItem && (
          <section className="popup bg-white border border-orange-300 rounded-lg p-4 mt-4 shadow-lg">
            <h2 className="text-xl text-amber-700 font-bold">{selectedItem.title}</h2>
            <p className="text-sm text-gray-600">{selectedItem.region} • {formatDate(parseInt(selectedItem.date))}</p>
            <p className="mt-2">{selectedItem.description}</p>
            <button className="mt-4 bg-amber-600 text-white px-4 py-1 rounded" onClick={() => setSelectedItem(null)}>Fermer</button>
          </section>
        )}
      </main>
    </div>
  );
}