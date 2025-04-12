"use client";
import { useState } from "react";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import SelectDropdown from "./selectCareer";
import ReservationsTimesheet from "./timesheet";

export function ReservationCalendar() {
  const [activeFilter, setActiveFilter] = useState("day");

  const filters = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
  ];

  return (
    <div className="py-4">
      {/* Filters */}
      <div className="w-full col-gap-0 grid grid-cols-2 sm:grid-cols-2 gap-x-0 gap-y-4 md:gap-4 md:flex items-center justify-between gap-2 lg:gap-6 xl:gap-12">
        {/* Reservations */}
        <div className="flex col-span-2 sm:col-span-1 gap-2 xl:gap-4 items-center">
          <div className="p-2 bg-blue-50 w-fit rounded-md">
            <HiCalendarDateRange className="text-blue-500 text-3xl" />
          </div>
          <h2 className="text-xl text-gray-600 font-semibold">4,021</h2>
          <h2 className="text-sm text-gray-400">Reservations</h2>
        </div>

        {/* Date navigation */}
        <div className="flex col-span-2 sm:col-span-1 gap-2 xl:gap-6 items-center">
          <div className="p-2 px-6 bg-teal-50 border-1 border-teal-500 w-fit rounded-md">
            <p className="text-gray-700 font-semibold text-xs">Today</p>
          </div>
          <button className="btn text-xl text-gray-600">
            <LiaAngleLeftSolid className="text-2xl text-gray-500" />
          </button>
          <button className="btn text-xl text-gray-600">
            <LiaAngleRightSolid className="text-2xl text-gray-500" />
          </button>
          <h2 className="text-sm text-gray-300 shrink-0">Tue, 19 Nov 2024</h2>
        </div>

        {/* Filter buttons */}
        <div className="flex border-1 border-gray-200 gap-4 bg-gray-50 rounded-md py-1 px-2 w-fit">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`py-1 px-4 font-semibold text-[12px] rounded-md focus:outline-none ${
                activeFilter === filter.id
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Dropdown */}
        <div>
          <SelectDropdown />
        </div>
      </div>

      <ReservationsTimesheet />
    </div>
  );
}
