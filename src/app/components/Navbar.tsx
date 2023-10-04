"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all px-6">
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="flex z-40 font-semibold text-2xl">
          ForaCast
        </Link>
        <div className="flex flex-row space-x-4">
          <button
            className="m-auto hover:underline"
            onClick={() => router.push("/auth/login")}
          >
            Sign in
          </button>
          <button
            className="bg-black p-2 text-white rounded-md hover:bg-slate-900"
            onClick={() => router.push("/auth/register")}
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
