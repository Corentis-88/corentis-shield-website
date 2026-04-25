import { redirect } from "next/navigation";

export default function ShieldRedirectPage() {
  redirect("/runtime-guard");
}
