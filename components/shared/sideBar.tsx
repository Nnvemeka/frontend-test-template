// import React from "react";
// import { RxDashboard } from "react-icons/rx";
// import { SlOrganization } from "react-icons/sl";
// import SideBarNavItem from "./sideBarNavItem";
// import { HiCalendarDateRange } from "react-icons/hi2";
// import { BsPersonHearts, BsPersonSquare } from "react-icons/bs";
// import { LuHeartPulse } from "react-icons/lu";
// import { PiFoldersFill, PiJarLabelDuotone } from "react-icons/pi";
// import { BiTestTube } from "react-icons/bi";

// const sideBarNavs = [
//   {
//     title: "Dashboard",
//     icon: RxDashboard,
//     path: "/dashboard",
//   },

//   {
//     title: "Clinic",
//     icon: SlOrganization,
//     path: "/clinic",
//     submenu: true,
//     submenuItems: [
//       {
//         title: "Reservations",
//         path: "/reservation",
//         icon: HiCalendarDateRange,
//       },
//       {
//         title: "Patients",
//         path: "/patients",
//         icon: BsPersonHearts,
//       },
//       {
//         title: "Treatments",
//         path: "/treatments",
//         icon: LuHeartPulse,
//       },
//       {
//         title: "Pharmacy",
//         path: "/pharmacy",
//         icon: PiJarLabelDuotone,
//       },
//       {
//         title: "Laboratory",
//         path: "/lab",
//         icon: BiTestTube,
//       },
//       {
//         title: "Departments",
//         path: "/departments",
//         icon: PiFoldersFill,
//       },
//       {
//         title: "Staff List",
//         path: "/staff-list",
//         icon: BsPersonSquare,
//       },
//     ],
//   },
// ];

// type Props = {
//   onOpen: () => void;
//   isOpen: boolean;
// };

// export function SideBar({ onOpen, isOpen }: Props) {
//   return (
//     <div
//       style={{ zIndex: "999" }}
//       className={`fixed top-0 left-0 h-full w-[220px] dark:bg-secondary bg-white border-r border-r-[#eee] z-50
//           transition-transform duration-300 ease-in-out flex flex-col
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//     >
//       <div className="flex flex-col py-4 space-y-2 mt-20 w-full">
//         {sideBarNavs.map((item) => (
//           <SideBarNavItem key={item.title} nav={item} openNav={onOpen}>
//             {item.title}
//           </SideBarNavItem>
//         ))}
//       </div>
//     </div>
//   );
// }

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
