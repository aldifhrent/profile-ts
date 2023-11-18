import React from "react";
import ImageProfile from "@/components/image-profile";
import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import Link from "next/link";
import SocialMedia from "./social-media";

//👇 Configure our font object
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProfileData = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-col items-center">
          <ImageProfile />
          <p className={cn("text-black text-xl mt-1 mb-1 ", poppins.className)}>
            Aldi Ahmad Fahrizi Ilmawan
          </p>
          <p
            className={cn(
              "text-md font-bold bg-black text-white w-16 text-center mt-1 ",
              poppins.className
            )}
          >
            Intern
          </p>
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default ProfileData;
