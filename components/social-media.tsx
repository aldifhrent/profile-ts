import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
interface SocialMediaItem {
  icon: React.ReactNode; // Assuming Instagram returns a ReactNode
  link: string;
}

const socialMedia: SocialMediaItem[] = [
  {
    icon: <AiFillInstagram size={30} />,
    link: "https://www.instagram.com/aldifhrnt",
  },
  {
    icon: <AiFillLinkedin size={30} />,
    link: "https://id.linkedin.com/in/aldi-ahmad-fahrizi-ilmawan-b46328224",
  },
  // Add more social media profiles here in a similar format
];

const SocialMedia: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-4 h-4 rounded-md gap-x-2 mt-4 px-4">
        {socialMedia.map((social, index) => (
          <Link key={index} rel="noopener noreferrer" target="_blank" href={social.link} className="mt-2 md:mt-1" >
            <button>{social.icon}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
