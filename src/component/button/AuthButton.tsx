"use client";
import * as React from "react";
import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";
import { signInWithGitHub, signInWithGoogle } from "@/server_action/auth";

interface IProps {
  authType: "Google" | "Github" | "Email";
}

const AuthButton = ({ authType }: IProps) => {
  return (
    <button
      className={
        "mode-hover-button w-[300px] sm:min-w-[400px] font-[family-name:var(--mono)]"
      }
    >
      {authType === "Google" && (
        <form action={signInWithGoogle}>
          <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
          <span className="ml-4">Google 로그인</span>
        </form>
      )}
      {authType === "Github" && (
        <form action={signInWithGitHub}>
          <Image src={githubLogo} alt="Github Logo" width={20} height={20} />
          <span className="ml-4">Github 로그인</span>
        </form>
      )}
      {authType === "Email" && <span>Continue with Email</span>}
    </button>
  );
};

export default AuthButton;
