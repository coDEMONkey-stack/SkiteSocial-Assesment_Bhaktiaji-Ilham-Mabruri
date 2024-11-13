"use client";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="grid">
        {/* <!-- ===== Sidebar Start ===== --> */}
        
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col">
          {/* <!-- ===== Header Start ===== --> */}
          {/* <Header/> */}
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="w-full h-max">
            <div className="relative overflow-hidden mx-auto max-w-2xl sm:p-9 p-12 bg-[#e7f5fd]">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
