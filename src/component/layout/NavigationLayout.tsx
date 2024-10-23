import * as React from "react";
import { House, Search, Heart, Popcorn, Clipboard } from "lucide-react";
import Link from "next/link";

const NavigationLayout = () => {
  return (
    <>
      <nav className="h-16 justify-around fixed bottom-0 w-full block md:hidden bg-borderColor backdrop-blur-sm bg-opacity-50">
        <Link href={"/"} className={"items-center"}>
          <Popcorn className={"h-[2rem] w-[2rem] "} />
        </Link>
        <Link href={"/"} className={"items-center"}>
          <Heart className={"h-[2rem] w-[2rem] "} />
        </Link>
      </nav>
      <nav className={"navi"} aria-label="Main navigation">
        <Link href={"/login"} className={"hidden md:block ml-10 mr-5"}>
          <Clipboard className={"h-[2rem] w-[2rem] md:hidden"} />
          <h2 className={"font-bold text-xl hidden md:block"}>Movie Gallery</h2>
        </Link>
        <Link href={"/login"} className={"items-center"}>
          <House className={"h-[2rem] w-[2rem] md:hidden"} />
          <h3 className={"font-mono font-semibold text-lg hidden xl:block"}>
            홈
          </h3>
        </Link>
        <Link href={"/"} className={"items-center"}>
          <Popcorn className={"h-[2rem] w-[2rem] md:hidden"} />
          <h3 className={"font-mono font-semibold text-lg hidden md:block"}>
            영화 더보기
          </h3>
        </Link>
        <Link href={"/"} className={"items-center"}>
          <Search className={"h-[2rem] w-[2rem] md:hidden"} />
          <h3 className={"font-mono font-semibold text-lg hidden md:block"}>
            검색
          </h3>
        </Link>
        <Link href={"/"} className={"items-center"}>
          <Heart className={"h-[2rem] w-[2rem] md:hidden"} />
          <h3 className={"font-mono font-semibold text-lg hidden md:block"}>
            좋아요
          </h3>
        </Link>
      </nav>
    </>
  );
};

export default NavigationLayout;
