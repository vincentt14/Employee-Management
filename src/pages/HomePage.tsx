"use client";

import Lottie from "lottie-react";
import office from "../assets/lottie/office.json";
import { CustomButton } from "@/components";

const HomePage = () => {
  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-5xl font-bold text-secondary">Employee Management</h1>
            <hr className="w-[100px] my-3 p-1 bg-secondary border-0 rounded-sm" />
            <p className="text-primary text-xl max-w-xl">This application is used for employee attendance and employee management</p>
            <CustomButton />
          </div>
          <div className="hidden w-full px-4 selft-center md:block lg:w-1/2 border rounded-md p-4 blur-sm">
            <Lottie animationData={office} style={{ width: "400px", height: "400px" }} className="mx-auto blur-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
