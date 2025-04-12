import { TaskStatus } from "./types";
import { RxDashboard } from "react-icons/rx";
import { SlOrganization } from "react-icons/sl";
import { HiCalendarDateRange } from "react-icons/hi2";
import { BsPersonHearts, BsPersonSquare } from "react-icons/bs";
import { LuHeartPulse } from "react-icons/lu";
import { PiFoldersFill, PiJarLabelDuotone } from "react-icons/pi";
import { BiTestTube } from "react-icons/bi";

export const sideBarNavs = [
  {
    title: "Dashboard",
    icon: RxDashboard,
    path: "/dashboard",
  },
  {
    title: "Clinic",
    icon: SlOrganization,
    path: "/clinic",
    submenu: true,
    submenuItems: [
      {
        title: "Reservations",
        path: "/reservation",
        icon: HiCalendarDateRange,
      },
      {
        title: "Patients",
        path: "/patients",
        icon: BsPersonHearts,
      },
      {
        title: "Treatments",
        path: "/treatments",
        icon: LuHeartPulse,
      },
      {
        title: "Pharmacy",
        path: "/pharmacy",
        icon: PiJarLabelDuotone,
      },
      {
        title: "Laboratory",
        path: "/lab",
        icon: BiTestTube,
      },
      {
        title: "Departments",
        path: "/departments",
        icon: PiFoldersFill,
      },
      {
        title: "Staff List",
        path: "/staff-list",
        icon: BsPersonSquare,
      },
    ],
  },
];

export const statusStyles = {
  finished: "bg-teal-50 border-transparent text-teal-400",
  registered: "bg-yellow-100 border-transparent text-yellow-700",
  encounter: "bg-sky-100 border-transparent text-sky-700",
  unavailable: "bg-gray-100 border-transparent text-gray-700",
};

export const doctorsData = [
  {
    id: "1",
    name: "Dr. Bolaji Maduka",
    numberOfPatients: 4,
    schedule: [
      {
        patient: "Abby Simons",
        title: "Dentist schedule",
        status: "finished" as TaskStatus,
        start: "8:00 am",
        end: "9:00 am",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Samson",
    numberOfPatients: 6,
    schedule: [
      {
        patient: "Abby Simons",
        title: "Dentist schedule",
        status: "registered" as TaskStatus,
        start: "9:00 am",
        end: "10:00 am",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Johnpaul",
    numberOfPatients: 6,
    schedule: [
      {
        patient: "Abby Simons",
        title: "Dentist schedule",
        status: "encounter" as TaskStatus,
        start: "8:00 am",
        end: "9:00 am",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Frank",
    numberOfPatients: 6,
    schedule: [],
  },
];
