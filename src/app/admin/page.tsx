import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import content from "@/data/site-content.json";
import { AdminEditor } from "@/components/admin/admin-editor";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await verifySession();
  if (!authed) redirect("/admin/login");

  return <AdminEditor initialContent={JSON.parse(JSON.stringify(content))} />;
}