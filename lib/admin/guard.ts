import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, adminConfigured, verifySessionToken } from "./session";

export async function hasSession(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export async function requireSession(): Promise<void> {
  if (!(await hasSession())) redirect("/admin/");
}
