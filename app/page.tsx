import ImageProfile from "@/components/image-profile";
import SocialMedia from "@/components/social-media";
import TechDetails from "@/components/tech";
import { poppins } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7efe1] flex overflow-hidden">
      {/* Card */}
      <div className="w-full flex flex-col gap-x-4 items-center justify-center">
        {/* Image and Social Media */}
        <div className="flex flex-col items-center justify-center">
          <ImageProfile />
        </div>
        {/* Name and others */}
        <div className="flex flex-col items-center">
          <p className={cn("text-black text-xl font-bold mt-2 md:mt-4", poppins.className)}>
            Aldi Ahmad Fahrizi Ilmawan
          </p>
          <p
            className={cn(
              "w-16 text-md font-bold bg-black text-white text-center mt-2 ",
              poppins.className
            )}
          >
            Intern
          </p>
          <Link
            href="/profile"
            className={cn("text-sm mt-2 cursor-pointer ", poppins.className)}
          >
            See more profile
          </Link>
        </div>
        <SocialMedia />
      </div>
      {/* <TechDetails /> */}
      
    </main>
  );
}
