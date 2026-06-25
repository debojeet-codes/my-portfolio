"use client";

import { useEffect } from "react";

const images = [
  "/images/branding1.png",
  "/images/branding2.png",
  "/images/posters.png",
  "/images/idcards.png",
  "/images/thumbnails.png",
  // Add all your images here
];

export default function ImagePreloader() {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
}