import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus, FaRegBell } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import profileImage from "@/assets/nnaemeka.png";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

type HeaderProps = {
  title: string;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const Header: React.FC<HeaderProps> = ({
  isSidebarOpen,
  toggleSidebar,
  title,
}) => {
  return (
    <header
      style={{ zIndex: "99" }}
      className={`flex items-center justify-between bg-white h-[70px] border-b-1 border-b-[#eee] px-4 md:px-5 
      ml-0 py-3 fixed w-full top-0`}
    >
      <div className="flex items-center gap-8  bg-white">
        <div
          className={`flex items-center justify-start gap-6 lg:gap-4 text-xl font-normal text-primary`}
        >
          {/* Logo */}
          {!isSidebarOpen ? (
            <button
              onClick={toggleSidebar}
              className="flex lg:hidden border-1 text-teal-400 bg-teal-50 border-teal-400 p-1 rounded-md"
            >
              <RxHamburgerMenu />
            </button>
          ) : (
            <button
              onClick={toggleSidebar}
              className="flex lg:hidden border-1 text-teal-400 bg-teal-50 border-teal-400 p-1 rounded-md"
            >
              <RxCross1 />
            </button>
          )}
          <Link href="/" className="flex items-center">
            <div className="h-[20px] w-[20px]  bg-teal-400 mr-4"></div>

            <h1 className="text-teal-400 font-semibold text-md">Hospital</h1>
            <span className="text-indigo-800 font-semibold text-md">EMR</span>
          </Link>

          <div className="h-[30px] w-[2px] bg-[#eee]"></div>
        </div>

        <h2 className="font-semibold hidden sm:block sm:text-none md:text-xl">
          {title}
        </h2>
      </div>

      <div className="flex gap-4 lg:gap-8 items-center">
        <Link
          href={"#"}
          className="hidden md:flex justify-center items-center w-[30px] h-[30px] bg-teal-400 rounded-full"
        >
          <FaPlus className="text-white" />
        </Link>
        <Link href={"#"} className="hidden md:flex">
          <FaRegCircleQuestion className="text-gray-400 text-[30px]" />
        </Link>

        <Link href={"#"} className="hidden md:flex">
          <IoSettingsOutline className="text-gray-400 text-[30px]" />
        </Link>

        <Link href={"#"} className="hidden md:flex">
          <FaRegBell className="text-gray-400 text-[30px]" />
        </Link>

        <button className="flex items-center gap-2 cursor-pointer">
          <Image
            src={profileImage}
            alt="profile"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <p className="text-gray-500 text-[14px] hidden md:block">
            Promise Agugharam
          </p>

          <IoIosArrowDown className="text-gray-400 text-[16px]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
