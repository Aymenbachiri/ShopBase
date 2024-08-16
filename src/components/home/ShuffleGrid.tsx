"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { generateSquares } from "./GenerateSquares";

export const ShuffleGrid = () => {
  const timeoutRef: any = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);

  return (
    <main className="grid grid-cols-4 grid-rows-4 h-[500px] md:h-full gap-1">
      {squares.map((sq: any) => sq)}
    </main>
  );
};
