import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/server_action/auth";

const matchersForAuth = ["/dashboard/*", "/myaccount/*", "/settings/*", "/"];
const matchersForSignIn = ["/signup/*", "/signin/*"];

export async function middleware(request: NextRequest) {
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return (await getSession())
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/signin", request.url));
  }

  // if (isMatch(request.nextUrl.pathname, matchersForSignIn)) {
  //   return (await getSession())
  //     ? NextResponse.redirect(new URL("/", request.url))
  //     : NextResponse.next();
  // }
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => {
    const pattern = new RegExp("^" + url.replace("/*", "(/.*)?") + "$");
    return pattern.test(pathname);
  });
}
