"use client";

import Image from "next/image";
import profileImage from "@/assets/nnaemeka.png";
import { useState } from "react";
import AppointmentActionModal from "./appointmentActions";
import { doctorsData } from "@/utils/constants";
import { Appointment, TaskStatus } from "@/utils/types";
import AppointmentCard from "./appointmentCard";

const ReservationsTimesheet = () => {
  const [openActions, setOpenActions] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{
    doctorId: string;
    doctorName: string;
    time: string;
  } | null>(null);

  const [doctors, setDoctors] = useState<Appointment[]>(doctorsData || []);
  const [hoveredHour, setHoveredHour] = useState<string | null>(null);

  const handleSlotClick = (
    doctorId: string,
    doctorName: string,
    time: string
  ) => {
    setSelectedSlot({ doctorId, doctorName, time });
    setOpenActions(true);
    console.table({ doctorId, doctorName, time });
  };

  const hours = [
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
  ];

  // Add template schedule
  const handleAddAppointment = (hour: string, doctorId: string) => {
    const hourIndex = hours.indexOf(hour);

    if (hourIndex === -1 || hourIndex + 4 >= hours.length) {
      console.warn("Invalid hour or not enough room for 2-hour slot");
      return;
    }

    const newAppointment = {
      patient: "New Patient",
      title: "New Appointment",
      status: "registered" as TaskStatus,
      start: hours[hourIndex],
      end: hours[hourIndex + 3],
    };

    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) =>
        doc.id === doctorId
          ? {
              ...doc,
              numberOfPatients: doc.numberOfPatients + 1,
              schedule: [...doc.schedule!, newAppointment],
            }
          : doc
      )
    );

    setOpenActions(false);
  };

  const getTimeIndex = (time: string) => hours.indexOf(time);
  const getSlotSpan = (start: string, end: string) => {
    const startIndex = getTimeIndex(start);
    const endIndex = getTimeIndex(end);
    return endIndex - startIndex + 1;
  };
  return (
    <div className="w-full relative overflow-x-auto py-6">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `80px repeat(${doctors.length}, minmax(250px, 1fr))`,
        }}
      >
        {/* Time column */}
        <div className="flex flex-col border-r border-gray-300 bg-white">
          <div className="border-r border-b bg-white border-gray-200 p-1 h-14">
            <div className="flex h-full flex-col items-center justify-center bg-gray-200 rounded-sm gap-0">
              <p className="text-xs font-medium">GMT</p>
              <p className="text-xs font-medium">+02:00</p>
            </div>
          </div>
          {hours.map((hour) => (
            <div
              key={hour}
              className=" z-10 h-10 flex items-center justify-center text-sm text-gray-500 border-b border-gray-200"
            >
              {hour}
            </div>
          ))}
        </div>

        {/* Doctor columns */}
        {doctors.map((doctor) => {
          const skipSet = new Set<string>();
          return (
            <div
              key={doctor.id}
              className="flex flex-col border-r border-b bg-white border-gray-200"
            >
              <div className="h-12 border-gray-200 px-2 m-1 rounded-sm flex items-center gap-2 bg-gray-200 border-b">
                <Image
                  src={profileImage}
                  alt="profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xs font-semibold">{doctor.name}</h2>
                    <span className="text-sm font-bold cursor-pointer">
                      ...
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500">
                    Today&apos;s appointments:{" "}
                    <span className="font-bold text-gray-700">
                      {doctor.numberOfPatients} patient(s)
                    </span>
                  </p>
                </div>
              </div>

              {/* Time slots */}
              {hours.map((hour) => {
                if (skipSet.has(hour)) return null;

                const task = doctor?.schedule?.find((t) => t.start === hour);
                if (task) {
                  const span = getSlotSpan(task.start, task.end);

                  // Mark all spanned hours to be skipped
                  for (let i = 1; i < span; i++) {
                    skipSet.add(hours[getTimeIndex(hour) + i]);
                  }

                  return (
                    <AppointmentCard
                      key={`${doctor.id}-${hour}`}
                      patient={task?.patient as string}
                      status={task.status}
                      time={`${task.start} - ${task.end}`}
                      title={task.title}
                      span={span}
                    />
                  );
                }

                const isOccupied = doctor?.schedule?.some(
                  (task) =>
                    getTimeIndex(hour) > getTimeIndex(task.start) &&
                    getTimeIndex(hour) < getTimeIndex(task.end)
                );
                if (isOccupied) return null;

                return (
                  <div
                    key={`${doctor.id}-${hour}`}
                    className="relative flex justify-center h-10 border-b border-gray-200 p-1 cursor-pointer transition-all hover:border-1 hover:border-teal-200 hover:bg-teal-50"
                    onClick={() =>
                      handleSlotClick(doctor.id, doctor.name, hour)
                    }
                    onMouseEnter={() => setHoveredHour(hour)}
                    onMouseLeave={() => setHoveredHour(null)}
                  >
                    {openActions &&
                      selectedSlot?.doctorId === doctor.id &&
                      selectedSlot?.time === hour && (
                        <AppointmentActionModal
                          addAppointMent={() =>
                            handleAddAppointment(hour, doctor.id)
                          }
                          onClose={() => setOpenActions(false)}
                        />
                      )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {hoveredHour && (
        <div
          className="absolute left-0 w-full z-20 pointer-events-none flex items-center"
          style={{
            top: `${hours.indexOf(hoveredHour) * 40 + 100}px`,
            // left: "80px",
            right: "0",
            height: "1px",
          }}
        >
          <div className="w-full h-px bg-red-500 relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {hoveredHour}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsTimesheet;
