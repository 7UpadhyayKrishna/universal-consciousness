import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/login-form";
import { hasSession } from "@/lib/admin/guard";
import { adminConfigured } from "@/lib/admin/session";

export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <>
        <p className="eyebrow">Editorial desk</p>
        <h1>Editorial desk</h1>
        <p>The editorial desk is not configured. Set ADMIN_PASSWORD before signing in.</p>
      </>
    );
  }
  if (await hasSession()) redirect("/admin/posts/");
  return (
    <>
      <p className="eyebrow">Editorial desk</p>
      <h1>Sign in</h1>
      <p className="dek">Editors draft articles here. Published pages join the catalog on the next build.</p>
      <LoginForm />
    </>
  );
}
