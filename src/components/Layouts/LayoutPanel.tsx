"use client";
import React, { ReactNode } from "react";
import Header from "@/components/AdminPanel/common/Header";
import Sidebar from '@/components/AdminPanel/common/Sidebar';

export default function LayoutPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-max">
        {/* <!-- ===== Sidebar Start ===== --> */}
            <Sidebar />
        {/* <!-- ===== Sidebar END ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col bg-[#eaf5fc]">
            {/* <!-- ===== Header Start ===== --> */}
            <Header/>
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="w-full h-auto">
                <div className="relative p-7 bg-[#e7f5fd]">
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
