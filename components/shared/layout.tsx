"use client";

import React, { ReactNode, useState } from "react";
import { SideBar } from "./sideBar";
import Header from "./header";

const Layout = ({
  children,
  headerTitle,
}: {
  children: ReactNode;
  headerTitle: string;
}) => {
  const [isSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sidebar for desktop */}
      <div
        className={`hidden md:block fixed top-0 left-0 h-full ${
          isSidebarOpen ? "w-auto" : "w-0"
        } transition-width duration-300`}
      >
        <SideBar isOpen={isSidebarOpen} />
      </div>

      {/* Sidebar for mobile */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40">
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full bg-white shadow-md w-[70vw] z-50 transition-transform duration-300 ${
              isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <SideBar isOpen={isMobileSidebarOpen} />
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        toggleSidebar={handleToggleSidebar}
        title={headerTitle}
        isSidebarOpen={isMobileSidebarOpen}
      />

      {/* Main content */}
      {/* ${
     isSidebarOpen ? "ml-55" : "ml-0"
   }  */}
      <main
        className={`flex-1 ml-0 md:ml-55 mt-0 transition-margin duration-300 mt-16 relative z-10 overflow-hidden bg-stone-50`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
