"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Dashboard from "@/components/AdminPanel/Dashboard";
import PanelLanding from "@/components/Layouts/LayoutPanel"


export default function DashboardPanel() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => t,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <PanelLanding>
        <Dashboard />
      </PanelLanding>
    </>
  );
}
