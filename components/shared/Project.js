"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import projects from "@/data/projects.json";

export default function Project() {
    return (
        <section className="w-full h-fit">
            <header className='flex flex-col justify-center items-center mb-20'>
                <h2 className='dark:text-white font-black text-3xl tracking-wide text-center'>PROJETS</h2>
                <hr className="w-32 h-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500" />
            </header>
            <FocusCards cards={projects} />
        </section>
    );
}