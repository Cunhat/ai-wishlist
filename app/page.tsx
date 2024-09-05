import { db } from "@/db";
import { user } from "@/db/schema";
import Image from "next/image";

export default async function Home() {
  const users = await db.select().from(user).all();

  console.log(users);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
