'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type FullscreenModalProps = {
  imageUrl: string;
  audioUrl: string;
  onClose: () => void;
};

export default function FullscreenModal({ imageUrl, audioUrl, onClose }: FullscreenModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [showVisualizer, setShowVisualizer] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(err => console.warn("Autoplay prevented:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]); // Runs when `isPlaying` changes

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume; // Set volume correctly
    }
  }, [volume]);

  useEffect(() => {
    if (!showVisualizer) return;
  
    const audio = audioRef.current;
    if (!audio) return;
  
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;
  
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    const draw = () => {
      if (!canvas || !ctx) return;
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
  
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgb(${50 + i * 2}, 0, ${150 + i})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };
  
    draw();  
    return () => {
      audioContext.close();
    };
  }, [showVisualizer]);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <Image src="/close.svg" alt='close' width={32} height={32} />
      </button>

      {/* Background Image */}
      <Image src={imageUrl} alt="Fullscreen" fill className="object-cover absolute inset-0" />

      {/* Audio Element */}
      <audio ref={audioRef} src={audioUrl} loop />

      {/* Controls */}
      <div className="absolute bottom-6 flex items-center gap-4 bg-white p-3 rounded-lg shadow-lg z-10">
        <div className="relative group">
          <button onClick={onClose} className="p-2 transition-transform transform hover:scale-110">
            <Image src="/close.svg" alt="Close" width={32} height={32} />
          </button>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Close
          </span>
        </div>

        <div className="relative group">
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <Image src="/pause.svg" alt="Pause" width={32} height={32} />
            ) : (
              <Image src="/play.svg" alt="Play" width={32} height={32} />
            )}
          </button>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Play/Pause
          </span>
        </div>

        {/* Toggle Visualizer Button */}
        <div className="relative group">
          <button onClick={() => setShowVisualizer(!showVisualizer)}>
            <Image src="/visualiser.svg" alt="Visualiser" width={32} height={32} />
          </button>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Audio Visualiser
          </span>
        </div>

        {/* Volume Control */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24"
        />
      </div>

      {/* Audio Visualizer */}
      {showVisualizer && (
        <canvas ref={canvasRef} className="absolute bottom-20 w-full h-32 bg-transparent"></canvas>
      )}
    </div>
  );
}