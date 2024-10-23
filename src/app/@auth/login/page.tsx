import * as React from "react";
import AuthButton from "@/component/button/AuthButton";

const Page = () => {
  return (
    <div className="grid grid-rows-[50px_1fr_20px] min-h-screen flex-rcc font-mono p-8 pb-20 gap-5 sm:p-20 ">
      <h1 className={"font-mono font-bold text-3xl sm:text-4xl"}>로그인</h1>
      <main className="flex-csc gap-4 row-start-2 h-full pt-5 border-borderColor border-[1px] min-w-[400px] sm:min-w-[500px] rounded-lg">
        <div className="grid grid-cols-[1fr_30px_1fr] w-full flex-rcc gap-3 px-5">
          <span className={"w-full border-b-[1px] border-borderColor h-0"} />
          <span className="text-xl font-mono text">Or</span>
          <span className={"w-full border-b-[1px] border-borderColor h-0"} />
        </div>

        <AuthButton authType={"Google"} />
        <AuthButton authType={"Github"} />
      </main>
    </div>
  );
};

export default Page;
