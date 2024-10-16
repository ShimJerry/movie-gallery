"use client";
import * as React from "react";
import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";

interface IProps {
  authType: "google" | "github" | "certificate";
}

const AuthButton = ({ authType }: IProps) => {
  return (
    <button
      className={
        "mode-hover-button w-[300px] sm:min-w-[400px] font-[family-name:var(--mono)]"
      }
    >
      {authType === "google" && (
        <>
          <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
          <span className="ml-4">Google 로그인</span>
        </>
      )}
      {authType === "github" && (
        <>
          <Image src={githubLogo} alt="Github Logo" width={20} height={20} />
          <span className="ml-4">Github 로그인</span>
        </>
      )}
      {authType === "certificate" && <span>Continue with Email</span>}
    </button>
  );
};

export default AuthButton;
