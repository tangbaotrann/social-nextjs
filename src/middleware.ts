import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedSettingsPage = createRouteMatcher(["/settings(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedSettingsPage(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
