import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import experiences from "@/data/experiences.json";

export function Experience() {
  return (
    <section className="w-full h-fit">
      <header className='flex flex-col justify-center items-center mt-10'>
      <h2 className='dark:text-white font-black text-3xl tracking-wide text-center'>EXPERIENCES</h2>
      <hr className="w-32 h-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500" />
      </header>
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
    </section>
  );
}