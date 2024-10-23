"use client";
import * as React from "react";
import { useCallback } from "react";
import { Movie } from "@/types/movie";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import StarScore from "@/component/StarScore";

interface Props {
  movies: Movie[];
}

const Banner = ({ movies }: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  }, [movies.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1,
    );
  }, [movies.length]);

  return (
    <>
      <div className="w-full flex flex-col h-[600px] overflow-hidden">
        <button onClick={handlePrev}>
          <ChevronLeft className="absolute left-4 top-[250px] w-20 h-20 z-10" />
        </button>
        <div
          className="flex w-full h-[500px] items-center transition-transform duration-500 ease-in-out relative"
          style={{
            transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
          }}
        >
          {movies.map((movie: Movie, index) => (
            <div
              key={movie.id}
              className={`relative w-[100%] h-[500px] flex-shrink-0`}
            >
              <Image
                alt={`Top ${index}`}
                src={`${process.env.NEXT_PUBLIC_TDMB_IMAGE_URL}${movie.backdrop_path}`}
                fill
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                <div
                  className={
                    "flex flex-row w-[60%] h-[90%] border-borderColor border-2 rounded-xl p-5 shadow-2xl transform transition-transform hover:scale-105"
                  }
                  style={{
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // 깊은 그림자 추가
                  }}
                >
                  <div className={"w-[50%] flex flex-col gap-2"}>
                    <h3 className={"text-2xl font-semibold"}>{movie.title}</h3>
                    <h5 className={"text-lg font-semibold"}>
                      {movie.original_title}
                    </h5>
                    <p className="text-sm">{movie.overview}</p>
                    <div className={"mt-10"}>
                      <StarScore score={movie.vote_average} size={28} />
                    </div>
                  </div>
                  <div className={"w-[50%] h-full relative"}>
                    <Image
                      loading={"eager"}
                      fill
                      className="object-contain"
                      src={`${process.env.NEXT_PUBLIC_TDMB_IMAGE_URL}${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext}>
          <ChevronRight className="absolute top-[250px] right-4 w-20 h-20 z-10" />
        </button>
      </div>
    </>
  );
};

export default Banner;
