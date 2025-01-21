"use client"

import FlickeringGrid from "@/components/ui/flickering-grid"

export default function Header() {
  return (
    <header className="relative h-[250px] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-xl" />
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={9.5} // Size of each grid square
        gridGap={8} // Gap between grid squares
        color="#147ee0" // Color of the grid
        maxOpacity={0.8} // Maximum opacity of the grid squares
        flickerChance={0.7} // Chance of a square flickering
        height={800} // Height of the grid
        width= {4000} // Width of the grid
      />
    </header>
  )
}