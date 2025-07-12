
"use client";

import { SparklesCore } from "./magicui/SparklesCore";

export default function SparklesCore() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute -inset-0 z-0 animate-pulse bg-gradient-to-br from-purple-800 via-blue-600 to-pink-500 opacity-30 blur-2xl" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={1000}
        className="absolute inset-0 w-full h-full z-10"
        particleColor="#60A5FA"
        />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Aditi ✨</h1>
        <p className="text-lg opacity-80">Welcome to my magical portfolio</p>
      </div>
    </div>
  );
}
