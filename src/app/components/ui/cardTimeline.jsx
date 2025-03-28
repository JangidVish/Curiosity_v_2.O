"use client";
import { cn } from "@/app/lib/utils";


export function CardDemo({card}) {
  return (
    <div className="max-w-xl mx-5 group/card">
      <div
        className={cn(
          " bg-gradient-to-b from-black to-red-950 cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          ""
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-slate-200 opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {card.year}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {card.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {card.content}
          </p>
        </div>
      </div>
    </div>
  );
}
