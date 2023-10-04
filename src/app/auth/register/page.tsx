import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center p-32">
      <div className="border-4 border-zinc-100 p-10 rounded-md shadow-md flex flex-col justify-center space-y-4 ">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <Link href="/" className="z-40 font-semibold text-xl flex">
              ForaCast
            </Link>
          </div>
          <hr className="mx-6" />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <label>Email:</label>
              <input
                type="text"
                className="border-2 border-zinc-100 rounded-sm p-1"
                placeholder="email"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label>Password:</label>
              <input
                type="password"
                className="border-2 border-zinc-100 rounded-sm p-1"
                placeholder="password"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label>Repeat password:</label>
              <input
                type="password"
                className="border-2 border-zinc-100 rounded-sm p-1"
                placeholder="password"
              />
            </div>
          </div>
          <button className="bg-blue-500 rounded-lg text-white text-xl p-2 mx-4 hover:bg-blue-600 shadow-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
