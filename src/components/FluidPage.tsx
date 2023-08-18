import React from "react";
import { DetailedHTMLProps, HTMLAttributes, Key, ReactNode } from "react";

function FluidPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center min-h-screen">
      {/*REMOVE: Using temporary background color. Remove BG once the media query styling is finalized. */}
      <div className="lg:w-[980px] flex-col bg-gray-900 px-10 py-[100px]">
        {children}
      </div>
    </main>
  );
}

export default FluidPage;
