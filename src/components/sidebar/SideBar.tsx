import React from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

type Props = {};

export default function SideBar({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-white text-black">
      <div className="fixed top-0 left-0 w-[400px]">
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
}
