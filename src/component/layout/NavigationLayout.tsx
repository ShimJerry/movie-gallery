import * as React from "react";
import { Heart, Popcorn } from "lucide-react";
import Link from "next/link";

const NavigationLayout = async () => {
  return (
    <>
      <nav className="h-16 justify-around fixed md:sticky bottom-0 w-full block md:hidden bg-borderColor backdrop-blur-sm bg-opacity-50">
        <Link href={"/"} className={"items-center"}>
          <Popcorn className={"h-[2rem] w-[2rem] "} />
        </Link>
        <Link href={"/"} className={"items-center"}>
          <Heart className={"h-[2rem] w-[2rem] "} />
        </Link>
      </nav>
      <nav className={"md_navi"} aria-label="Main navigation">
        <Link href={"/"} className={"ml-10 mr-5"}>
          <h2 className={"font-bold text-xl"}>Movie Gallery</h2>
        </Link>
        <Link href={"/"} className={"items-center"}>
          <h3 className={"font-mono font-semibold text-lg "}>홈</h3>
        </Link>
        <Link href={"/movies"} className={"items-center"}>
          <h3 className={"font-mono font-semibold text-lg "}>영화 더보기</h3>
        </Link>
        <Link href={"/search"} className={"items-center"}>
          <h3 className={"font-mono font-semibold text-lg "}>검색</h3>
        </Link>
        <Link href={"/login"} className={"items-center"}>
          <h3 className={"font-mono font-semibold text-lg "}>마이페이지</h3>
        </Link>
      </nav>
    </>
  );
};

export default NavigationLayout;
