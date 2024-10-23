import { movieApi } from "@/app/api";
import { PageResponse } from "@/types/common";
import { Movie } from "@/types/movie";
import Banner from "@/component/banner/Banner";

async function TopMovie() {
  const movies = await movieApi<PageResponse<Movie>>({
    url: "/trending/movie/week",
    method: "GET",
    revalidate: 60 * 60 * 24,
  });

  const topMovies = movies.results.sort(
    (movie1, movie2) => movie2.popularity - movie1.popularity,
  );

  return (
    <Banner
      movies={topMovies.length > 10 ? topMovies.slice(0, 10) : topMovies}
    />
  );
}

export default async function Home() {
  return (
    <div className={"mt-20"}>
      <TopMovie />
    </div>
  );
}
