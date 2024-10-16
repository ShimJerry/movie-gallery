import * as React from "react";
import { Clapperboard, House, Search, Heart } from "lucide-react";
import Link from "next/link";

const NavigationLayout = () => {
  return (
    <div className={"sidebar"}>
      <Link href={"/"} className={"sm:mb-10"}>
        <h2 className={"font-mono font-bold text-xl hidden xl:block"}>
          Movie Gallery
        </h2>
        <Clapperboard
          className={"h-[2rem] w-[2rem] hidden xl:hidden md:block"}
        />
      </Link>
      <Link href={"/"} className={"flex gap-5 items-center"}>
        <House className={"h-[2rem] w-[2rem]"} />
        <h3 className={"font-mono font-bold text-lg hidden xl:block"}>홈</h3>
      </Link>
      <Link href={"/"} className={"flex gap-5 items-center"}>
        <Search className={"h-[2rem] w-[2rem]"} />
        <h3 className={"font-mono font-bold text-lg hidden xl:block"}>검색</h3>
      </Link>
      <Link href={"/"} className={"flex gap-5 items-center"}>
        <Heart className={"h-[2rem] w-[2rem]"} />
        <h3 className={"font-mono font-bold text-lg hidden xl:block"}>
          좋아요
        </h3>
      </Link>
    </div>
  );
};

export default NavigationLayout;
