import { statusStyles } from "@/utils/constants";
import { AppointmentCardProps } from "@/utils/types";
import { FaCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TbLoader } from "react-icons/tb";

const AppointmentCard = ({
  patient,
  status,
  time,
  title,
  span,
}: AppointmentCardProps) => {
  return (
    <div
      className="relative  border-b border-gray-200 "
      style={{ height: `${40 * span}px`, width: "calc(100% - 10px)" }}
    >
      <div
        className={`absolute inset-1 rounded-sm overflow-hidden text-xs border font-medium w-full ${statusStyles[status]}`}
      >
        <div
          className={`flex justify-between p-1.5 items-center text-gray-600 ${
            status === "finished"
              ? "bg-teal-400"
              : status === "encounter"
              ? "bg-sky-400"
              : status === "registered"
              ? "bg-yellow-400"
              : "bg-gray-400"
          }`}
        >
          <span className="text-[16px]">{patient}</span>
          <div className="flex gap-1 items-center justify-center bg-white p-1 rounded-sm">
            <span
              className={`capitalize text-[10px] ${
                status === "finished"
                  ? "text-teal-400"
                  : status === "encounter"
                  ? "text-sky-400"
                  : status === "registered"
                  ? "text-yellow-400"
                  : "text-gray-400"
              }`}
            >
              {status}
            </span>
            <span>
              {status === "finished" ? (
                <FaCheck className="text-teal-400" />
              ) : status === "encounter" ? (
                <TbLoader className="text-sky-400" />
              ) : status === "registered" ? (
                <IoTimeOutline className="text-yellow-400" />
              ) : null}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0 px-1 py-0.5">
          <h2 className="text-gray-600 text-sm">{title}</h2>
          {time && <span className="text-xs text-gray-500">{time}</span>}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
