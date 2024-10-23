"use client";
import * as React from "react";
import { Star, StarHalf } from "lucide-react";
import { useCallback } from "react";

interface Props {
  score: number;
  size: number;
}

const StarScore = ({ score, size }: Props) => {
  const averageScore = score / 2; // 별점은 5점 만점 기준으로 계산 (예: 8.7 -> 4.35)

  const getStar = useCallback(() => {
    let result = [];

    // 정수 부분과 소수 부분을 구분하여 별을 렌더링
    const fullStars = Math.floor(averageScore); // 꽉 찬 별의 개수
    const hasHalfStar = averageScore % 1 > 0; // 반 별 여부

    // 꽉 찬 별을 먼저 추가
    for (let i = 0; i < fullStars; i++) {
      result.push(<Star key={i} size={size} fill="yellow" strokeWidth={0} />);
    }

    // 반 별을 추가
    if (hasHalfStar) {
      result.push(
        <StarHalf key={fullStars} size={size} fill="yellow" strokeWidth={0} />,
      );
    }

    // 빈 별 추가
    for (let i = result.length; i < 5; i++) {
      result.push(<Star key={i} size={size} fill="#111" strokeWidth={0} />);
    }

    return result;
  }, [averageScore, size]);

  return (
    <div className="relative">
      <div className="flex gap-1">{getStar()}</div>
    </div>
  );
};

export default StarScore;
