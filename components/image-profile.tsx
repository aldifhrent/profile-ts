import Image from "next/image";
import React from "react";
import ProfileImage from "../public/profile.jpg";

const ImageProfile = () => {
  return (
    <div className="items-center justify-center">
      <Image
        src={ProfileImage}
        alt="Profile Image"
        className="w-24 rounded-full"
      />
    </div>
  );
};

export default ImageProfile;
