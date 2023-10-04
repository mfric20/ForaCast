"use client";

import Image from "next/image";
import WeatherIcon from "../../public/weather-icon.png";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-10 flex flex-col space-y-10">
      <div className="flex justify-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-center">
          Cool <span className="text-blue-600">weather</span> forecast website!
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col space-y-2">
          <p className=" max-w-prose text-zinc-700 text-center">
            Cool weather forecast website everyone should use, recieve funny and
            cool notifications about upcomming weather in your city. The best
            thing? everything is free!
          </p>
          <div className="flex justify-center">
            <button
              className={buttonVariants()}
              onClick={() => router.push("/auth/register")}
            >
              Get started <ArrowRight className="ml-1 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
          <Image
            className="rounded-lg bg-white p-2 shadow-2xl ring-1 ring-gray-900/10"
            alt="weather-icon"
            src={WeatherIcon}
            height={350}
            width={350}
          ></Image>
        </div>
      </div>
    </div>
  );
}
