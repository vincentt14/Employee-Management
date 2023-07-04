"use client";

import Lottie from "lottie-react";
import office from "../assets/lottie/office.json";
import { CustomButton } from "@/components";
import { useState } from "react";

const HomePage = () => {
  const [login, setLogin] = useState(false);

  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="py-1 text-5xl font-bold bg-gradient-to-r from-red-600 to-secondary inline-block text-transparent bg-clip-text">Employee Management</h1>
            <hr className="w-[200px] my-3 p-1 bg-bgColor border border-borderColor rounded-sm" />
            <p className="text-primary text-xl max-w-xl">
              This application is used for <span className="text-white">Employee Attendance</span> and <span className="text-white">Employee Management</span>.
            </p>
            <div className="flex flex-col md:flex-row my-3">
              {login ? (
                <>
                  <CustomButton title="Attend" to="/attend" containerStyles="border-black bg-white hover:bg-[#ededed]" textStyles="text-black hover:text-[#262626]" />
                  <CustomButton title="Employee Management" to="/employeeManagement" containerStyles="md:ml-5 border-borderColor bg-bgColor hover:border-primary" textStyles="text-white" />
                </>
              ) : (
                <>
                  <CustomButton title="Login for Attendance or Management" to="/login" containerStyles="border-black bg-white hover:bg-[#ededed]" textStyles="text-black hover:text-[#262626]" />
                </>
              )}
            </div>
          </div>
          <div className="hidden w-full px-4 selft-center md:block lg:w-1/2 border-2 border-borderColor rounded-md p-4 bg-bgColor">
            <Lottie animationData={office} style={{ width: "400px", height: "400px" }} className="mx-auto blur-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
