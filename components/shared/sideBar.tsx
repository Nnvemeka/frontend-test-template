import React from "react";
import SideBarNavItem from "./sideBarNavItem";
import { sideBarNavs } from "@/utils/constants";

type Props = {
  isOpen: boolean;
};

export function SideBar({ isOpen }: Props) {
  return (
    <div
      style={{ zIndex: "999" }}
      className={`fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out flex flex-col 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        ${isOpen ? "w-full md:w-55" : "w-0"} bg-white  z-50`}
    >
      <div className="flex flex-col py-4 space-y-2 mt-20 w-full">
        {sideBarNavs.map((item) => (
          <SideBarNavItem key={item.title} nav={item}>
            {item.title}
          </SideBarNavItem>
        ))}
      </div>
    </div>
  );
}
