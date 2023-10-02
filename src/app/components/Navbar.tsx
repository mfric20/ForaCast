import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all px-6">
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="flex z-40 font-semibold text-2xl">
          ForaCast
        </Link>
        <div className="flex flex-row space-x-4">
          <LoginLink className="m-auto hover:underline">Sign in</LoginLink>
          <RegisterLink className="bg-black p-2 text-white rounded-md hover:bg-slate-900">
            Sign up
          </RegisterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
