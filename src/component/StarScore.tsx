"use client";
import * as React from "react";
import { Star, StarHalf } from "lucide-react";
import { useCallback } from "react";

interface Props {
  score: number;
  size: number;
}

const StarScore = ({ score, size }: Props) => {
  const averageScore = score / 2;

  const getStar = useCallback(() => {
    let result = [];

    const fullStars = Math.floor(averageScore);
    const hasHalfStar = averageScore % 1 > 0;

    for (let i = 0; i < fullStars; i++) {
      result.push(
        <Star
          key={i}
          size={size}
          fill="yellow"
          strokeWidth={0}
          data-testid="filled-star"
        />,
      );
    }

    if (hasHalfStar) {
      result.push(
        <StarHalf
          key={fullStars}
          size={size}
          fill="yellow"
          strokeWidth={0}
          data-testid="half-star"
        />,
      );
    }

    return result;
  }, [averageScore, size]);

  return (
    <div className="relative flex-row flex gap-2">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={`star${index}`}
            fill="#111"
            strokeWidth={0}
            size={size}
            data-testid="empty-star"
          />
        ))}
      </div>
      <div className="flex gap-1 absolute top-0">{getStar()}</div>
      <span
        className={"font-semibold"}
        style={{ fontSize: `${size - 8}px` }}
      >{`10/${Math.floor(score * 10) / 10}`}</span>
    </div>
  );
};

export default StarScore;
