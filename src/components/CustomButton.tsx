import { CustomButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({ title, btnType, containerStyles, handleClick, textStyles, to }: CustomButtonProps) => {
  return (
    <button type={btnType || "button"} className={`my-4 py-3 px-6 rounded-md font-semibold border ${containerStyles}`} onClick={handleClick}>
      {to ? (
        <Link href={to} className={`${textStyles}`}>
          {title}
        </Link>
      ) : (
        <span className={`${textStyles}`}>{title}</span>
      )}
    </button>
  );
};

export default CustomButton;
