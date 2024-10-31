"use client";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import useSwipe from "@/lib/hook/useSwipe";

interface Props {
  itemSize: number;
  children: React.ReactNode;
  interval?: number;
  height?: number;
}

const Banner = ({ children, itemSize, interval = 0, height = 500 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemSize);
  }, [itemSize]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemSize - 1 : prevIndex - 1,
    );
  }, [itemSize]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
    handleResume,
    handlePause,
  });

  useEffect(() => {
    let autoSlide: NodeJS.Timeout;

    if (interval > 0 && !isPaused) {
      autoSlide = setInterval(() => {
        handleNext();
      }, interval);
    }

    return () => clearInterval(autoSlide);
  }, [interval, isPaused]);

  return (
    <>
      <div className="w-full flex overflow-hidden" style={{ height }}>
        <div
          className="flex w-full items-center transition-transform duration-500 ease-in-out relative"
          style={{
            transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
            height,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child as React.ReactElement, {
              "aria-hidden": currentIndex !== index,
            }),
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
