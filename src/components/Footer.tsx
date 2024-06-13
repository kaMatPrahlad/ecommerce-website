import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex justify-between gap-24">
        {/* LEFT */}
        <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">PRAHLAD</div>
          </Link>
          <p>
            306, Ashadep Apt, Ghandhi Chowk, Phoolpada road, Virar 401305,
            Mumbai
          </p>
          <span className="font-semibold">kamatprahlad43@gmail.com</span>
          <span className="font-semibold">+9 733 7383 737</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* CENTER */}
      <div className="hidden lg:flex justify-between w-1/2"></div>
      {/* RIGHT */}
      <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <h1 className="font-medium text-lg">SUBSCRIBE</h1>
        <p>
          Be the first to get the latest news about trends, promotions, and much
          more!
        </p>
      </div>

      {/* BOTTOM */}
      <div className=""></div>
    </div>
  );
};

export default Footer;
