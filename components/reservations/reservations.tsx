"use client";

import React, { useState } from "react";
import { ReservationCalendar } from "./calender";

const ReservationsComponent = () => {
  const [activeTab, setActiveTab] = useState("calender");

  const tabs = [
    { id: "calender", label: "Calender" },
    { id: "log-history", label: "Log History" },
  ];
  return (
    <main className="bg-white mx-2 mt-3 rounded-sm px-2 md:px-6">
      <div className="flex border-b border-gray-200 gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 pt-4 pb-2 font-medium text-sm focus:outline-none ${
              activeTab === tab.id
                ? "text-teal-500 border-b-2 border-teal-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "calender" && <ReservationCalendar />}
      {activeTab === "log-history" && <div>Log History</div>}
    </main>
  );
};

export default ReservationsComponent;
