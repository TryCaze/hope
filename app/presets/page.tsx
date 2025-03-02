'use client';

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import FullscreenModal from '../components/Fullscreenmodal';

type GridItem = {
  id: number;
  title: string;
  imageUrl: string;
  audioUrl: string;
};

const items: GridItem[] = [
  { id: 1, title: 'Ocean', imageUrl: '/images/ocean.jpg', audioUrl: '/sounds/ocean.mp3' },
  { id: 2, title: 'Forest', imageUrl: '/images/forest.jpg', audioUrl: '/sounds/forest.mp3' },
  { id: 3, title: 'Rain', imageUrl: '/images/rain.jpg', audioUrl: '/sounds/rain.mp3' },
];

export default function Presets() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);

  const openFullscreen = (item: GridItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-black rounded-2xl shadow-lg p-4">
            <Image src={item.imageUrl} alt={item.title} width={150} height={150} className="rounded-lg" />
            <h3 className="text-lg font-semibold mt-4 mb-2 text-white">{item.title}</h3>
            <button className="mt-auto" onClick={() => openFullscreen(item)}>
              <PlayCircle size={32} className="text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Render Fullscreen Modal when Open */}
      {modalOpen && selectedItem && (
        <FullscreenModal
          imageUrl={selectedItem.imageUrl}
          audioUrl={selectedItem.audioUrl}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}