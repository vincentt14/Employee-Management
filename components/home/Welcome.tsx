import { Typewriter } from "react-simple-typewriter";
import CustomButton from "../shared/CustomButton";

export const Welcome = () => {
  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Welcome to <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">MG.</span>
      </h1>
      <hr className="w-16 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <p className="text-primary max-w-lg text-justify">A Work From Home Employee Management App</p>
      <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">
        You can{" "}
        <span style={{ color: "white", fontWeight: "500" }}>
          <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={70} delaySpeed={1500} words={["Manage Your Employee.", "Manage Reports.", "Track employee attendance.", "Absent."]} />
        </span>
      </h2>
      <div className="grid grid-cols-2 my-3 gap-x-2 lg:max-w-lg">
        <CustomButton to="login" title="Login" btnType="button" containerStyles="w-full border-black bg-white hover:bg-[#ededed]" textStyles="text-black hover:text-[#262626]" />
        <CustomButton to="manage" title="Manage" btnType="button" containerStyles="w-full border-borderColor bg-tertiary hover:border-primary" textStyles="text-white" />
      </div>
    </>
  );
};
