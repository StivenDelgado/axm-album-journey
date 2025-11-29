import { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import TrackListCollage from "@/components/TrackListCollage";
import MiniPlayer from "@/components/MiniPlayer";
import BehindTheAlbum from "@/components/BehindTheAlbum";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import bottegaAudio from "@/audio/BOTEGA MASTER 24 BITS.wav";
import bubaluAudio from "@/audio/BUBALU - KREMA MASTER 24 BITS.wav";
import siLaDejoSolaAudio from "@/audio/SI LA DEJO SOLA - KREMA MASTER 24 BITS.wav";
import rosasAudio from "@/audio/MASTER ROSAS EN LA TINA.wav";
import victoriaAudio from "@/audio/KREMA, VICTORIA MASTER 24BITS.wav";
import fiestoAudio from "@/audio/FIESTO - KREMA, TALES MASTER 24 BITS .wav";
import oroItalianoAudio from "@/audio/Oro Italiano - Krema.mp3";

const tracks = [
  { title: "BOTTEGA VENETA", duration: "4:05", audio: bottegaAudio },
  { title: "BUBALU", duration: "3:45", audio: bubaluAudio },
  { title: "SI LA DEJO SOLA", duration: "3:12", audio: siLaDejoSolaAudio },
  { title: "ROSAS EN LA TINA", duration: "3:21", audio: rosasAudio },
  { title: "VICTORIA", duration: "3:30", audio: victoriaAudio },
  { title: "FIESTO", duration: "2:55", audio: fiestoAudio },
  { title: "ORO ITALIANO", duration: "3:15", audio: oroItalianoAudio },
];

const Index = () => {
  const [activeTrackIndex, setActiveTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (index?: number) => {
    if (typeof index === "number") {
      if (index === activeTrackIndex) {
        setIsPlaying((prev) => !prev);
      } else {
        setActiveTrackIndex(index);
        setIsPlaying(true);
      }
      return;
    }

    if (activeTrackIndex === null) {
      setActiveTrackIndex(0);
      setIsPlaying(true);
      return;
    }

    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeTrackIndex === null) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    // Only load if there is an audio source
    if (tracks[activeTrackIndex].audio) {
      audio.src = tracks[activeTrackIndex].audio;
      audio.load();
      if (isPlaying) {
        audio
          .play()
          .catch(() => setIsPlaying(false));
      }
    } else {
      // If no audio, just simulate playing state or stop
      audio.pause();
      // optionally setIsPlaying(false) if we want to stop "playing" state for tracks without audio
    }
  }, [activeTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || activeTrackIndex === null) return;

    if (isPlaying && tracks[activeTrackIndex].audio) {
      audio
        .play()
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, activeTrackIndex]);

  // Add effect to limit playback to 30 seconds
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= 30) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleAudioEnded = () => {
    setIsPlaying(false);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
    }
  };

  return (
    <div className="scroll-smooth">
      <div className="snap-y snap-proximity h-screen overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <Hero />

        <TrackListCollage
          tracks={tracks}
          currentTrackIndex={activeTrackIndex}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />

        <BehindTheAlbum />
        <CTASection />
        <Footer />
      </div>

      <MiniPlayer
        currentTrack={activeTrackIndex !== null ? tracks[activeTrackIndex]?.title : null}
        isPlaying={isPlaying}
        onTogglePlay={() => handleTogglePlay()}
      />

      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        preload="auto"
      />
    </div>
  );
};

export default Index;
