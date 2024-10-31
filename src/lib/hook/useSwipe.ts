import { useCallback, useState } from "react";

interface UseSwipeProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  handlePause?: () => void;
  handleResume?: () => void;
}

const useSwipe = ({
  onSwipeRight,
  onSwipeLeft,
  handleResume,
  handlePause,
}: UseSwipeProps) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setStartX(e.touches[0].clientX);
      if (handlePause) handlePause();
    },
    [handlePause],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (startX === null) return;

      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      if (diff > 50) {
        onSwipeLeft();
        setStartX(null);
      } else if (diff < -50) {
        onSwipeRight();
        setStartX(null);
      }
    },
    [startX, onSwipeLeft, onSwipeRight],
  );

  const handleTouchEnd = useCallback(() => {
    setStartX(null);
    if (handleResume) handleResume();
  }, [handleResume]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setStartX(e.clientX);
      setIsDragging(true);
      if (handlePause) handlePause();
    },
    [handlePause],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || startX === null) return;

      const currentX = e.clientX;
      const diff = startX - currentX;

      if (diff > 50) {
        onSwipeLeft();
        setIsDragging(false);
      } else if (diff < -50) {
        onSwipeRight();
        setIsDragging(false);
      }
    },
    [isDragging, startX, onSwipeLeft, onSwipeRight],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setStartX(null);
    if (handleResume) handleResume();
  }, [handleResume]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setStartX(null);
      if (handleResume) handleResume();
    }
  }, [isDragging, handleResume]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  };
};

export default useSwipe;
