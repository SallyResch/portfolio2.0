'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from "../../public/20250502_184459.jpg";
import img3 from "../../public/ChatGPT Image 5 maj 2025 07_58_59.png";
import img4 from "../../public/ChatGPT Image 5 maj 2025 08_05_49.png";
import img5 from "../../public/ChatGPT Image 5 maj 2025 08_14_37.png";
import img6 from "../../public/ChatGPT Image 5 maj 2025 08_14_39.png";
import img7 from "../../public/ChatGPT Image 5 maj 2025 08_19_08.png";

export default function ProfileImageCarousel() {
  const images = [img1, img3, img4, img5, img6, img7];
  const [index, setIndex] = useState(0);

  // Automatisk rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Byt bild var 3:e sekund

    return () => clearInterval(interval); // Rensa när komponenten avmonteras
  }, [images.length]);

  return (
    <div>
      <Image src={images[index]} width={306} height={408} alt="Profilbild" />
    </div>
  );
}

