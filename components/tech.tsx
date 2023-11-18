import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

interface TechItems {
  icon: React.ReactNode; // Assuming Instagram returns a ReactNode
  name: string;
}

const TechData: TechItems[] = [
  {
    icon: <BiLogoReact size={30} />,
    name: "React JS"
  },
  {
    icon: <TbBrandNextjs size={30} />,
    name: "Next JS"
  },
  // Add more social media profiles here in a similar format
];
const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
const TechDetails = () => {
  return (
    <div className="flex flex-col w-4 h-4 gap-4 px-2">
      <h1 className={cn("text-md font-bold", poppins.className)}>Tech</h1>
      <div className="flex w-12 h-12 gap-4">
        {TechData.map((tech) => (
          <div key={tech.name}>
            {tech.icon}
            {tech.name}
            </div>
        ))}
      </div>
    </div>
  );
};

export default TechDetails;
