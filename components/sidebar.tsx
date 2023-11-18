import React from "react";
import { cn } from '../lib/utils';
import { poppins } from "@/lib/font";

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen items-center w-full  top-0 left-10">
      <ul className={cn("flex gap-x-4 text-black justify-end text-center items-center cursor-pointer mr-4", poppins.className)}>
        <li>Home</li>
        <li>Profile</li>
        <li>Tech</li>
      </ul>
    </div>
  );
};

export default SideBar;
