"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideBar } from "@/components";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="h-[100px]">
      {/* sidebar */}
      <SideBar />
      {/* header */}
      <div className="h-full max-w-[1366px] mx-auto flex justify-between items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          MC Dev
        </motion.span>
        <div className="flex gap-[20px]">
          <Link href="#">
            <Image
              className=""
              src="/facebook.png"
              width={38}
              height={38}
              alt="facebook"
            />
          </Link>
          <Link href="#">
            <Image
              className=""
              src="/instagram.png"
              width={40}
              height={40}
              alt="instagram"
            />
          </Link>
          <Link href="#">
            <Image
              className=""
              src="/youtube.png"
              width={40}
              height={40}
              alt="youtube"
            />
          </Link>
          <Link href="#">
            <Image
              className=""
              src="/dribbble.png"
              width={40}
              height={40}
              alt="dribbble"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
