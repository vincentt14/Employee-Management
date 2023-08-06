'use client'

import Lottie from "lottie-react";

import astro from "@/lottie/astro.json";
import { Status } from "@/components/home/Status";
import { Welcome } from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="container">
      <section id="home" className="pt-28 pb-24 lg:pt-44 lg:pb-32">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center md:px-4 lg:w-1/2">
            <Welcome />
            <Status />
          </div>
          <div className="w-full px-4 pt-4 self-center lg:w-1/2 border-2 shadow-lg border-borderColor rounded-md bg-secondary">
            <Lottie animationData={astro} className="mx-auto blur-none h-[300px] w-[300px] lg:h-[350px] lg:w-[350px]" />
          </div>
        </div>
      </section>
    </main>
  )
}
