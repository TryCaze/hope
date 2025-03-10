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
  { id: 1, title: 'Ocean', imageUrl: '/ocean.jpg', audioUrl: '/ocean.mp3' },
  { id: 2, title: 'Forest', imageUrl: '/forest.jpg', audioUrl: '/forest.mp3' },
  { id: 3, title: 'Rain', imageUrl: '/rain.jpg', audioUrl: '/rain.mp3' },
  { id: 4, title: 'Cicada', imageUrl: '/evangelion.jpg', audioUrl: '/evangelion.mp3' },
  { id: 5, title: 'Powerlines', imageUrl: '/powerlines.jpg', audioUrl: '/powerlines.mp3' },
  { id: 6, title: 'Thunder', imageUrl: '/thunder.jpg', audioUrl: '/thunder.mp3' },
  { id: 7, title: 'Night', imageUrl: '/night.jpg', audioUrl: '/night.mp3' },
  { id: 8, title: 'Fireplace', imageUrl: '/fireplace.jpg', audioUrl: '/fireplace.mp3' },
  { id: 9, title: 'Creek', imageUrl: '/creek.jpg', audioUrl: '/creek.mp3' },
];

export default function Presets() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);

  const openFullscreen = (item: GridItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <>
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
    <section>
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Need support?</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">If you have found an issue or have an idea email me or open up a support ticket on discord. Other ways of contacting me is through social media linekd at the bottom of the page.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="mailto:trycaze@proton.me" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Email
                </a>
                <a href="https://discord.gg/aEjafzsPe9" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    Discord Server
                </a>  
            </div>
        </div>
    </div>
</section>
    </>
  );
}