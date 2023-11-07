import React from "react";
import ImageProfile from "@/components/image-profile";
import SocialMedia from "./social-media";
import { Github, Twitter } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import Link from "next/link";

//👇 Configure our font object
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProfileData = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-y-4">
      <ImageProfile />
      <p className={cn("font-bold text-center", poppins.className)}>
        Aldi Ahmad Fahrizi Ilmawan
      </p>
      <Link href="/profile" className="w-full">
      <button 
        className={cn(
          "p-4 bg-gray-200/50 hover:bg-gray-300 w-full rounded-lg font-bold ",
          poppins.className
        )}
      >
        Profile
      </button>
      </Link>

      <div className="flex w-4 h-4 rounded-md gap-x-2 items-center justify-center mt-24">
        <SocialMedia icon={<Github />} link={"https://github.com/faraygd"} />
        <SocialMedia icon={<Twitter />} link={"https://github.com/faraygd"} />
      </div>
    </div>
  );
};

export default ProfileData;
