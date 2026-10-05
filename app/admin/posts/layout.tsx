import { AdminNav } from "@/components/admin/admin-nav";
import { requireSession } from "@/lib/admin/guard";

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  await requireSession();
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
