import Link from "next/link";
import React from "react";

interface SocialMediaProps {
  icon: React.ReactNode;
  link: string;
}
const SocialMedia = ({ icon, link }: SocialMediaProps) => {
  return (
    <Link href={link}>
      <button>{icon}</button>
    </Link>
  );
};

export default SocialMedia;
