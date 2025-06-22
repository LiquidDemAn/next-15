import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

// const isProtectedRoute = createRouteMatcher(["/user-profile"]);
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  // if (isProtectedRoute(request)) {
  //   await auth.protect();
  // }

  // if (!isPublicRoute(request)) {
  //   await auth.protect();
  // }

  const { userId, redirectToSignIn, sessionClaims } = await auth();

  if (isAdminRoute(request) && sessionClaims?.metadata.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!userId && !isPublicRoute(request)) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
