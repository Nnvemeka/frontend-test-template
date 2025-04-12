import Layout from "@/components/shared/layout";
import React from "react";

const NotFound = () => {
  return (
    <Layout headerTitle="Page Unavailable">
      <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="flex items-center justify-center bg-foreground gap-2 text-gray-600 hover:text-teal-400 font-medium text-sm sm:text-base underline"
              href="reservation"
              rel="noopener noreferrer"
            >
              See Reservations
            </a>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default NotFound;
