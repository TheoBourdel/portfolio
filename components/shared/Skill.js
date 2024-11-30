"use client";
import React from 'react'
import SkillCard from '../ui/SkillCard/skill-card';
import skills from '../../data/skills.json';

export default function Skill() {
    return (
        <section className="w-full h-fit mb-20 mt-20">
            <header className='flex flex-col justify-center items-center mb-20'>
                <h2 className='dark:text-white font-black text-3xl tracking-wide text-center'>SKILLS</h2>
                <hr className="w-32 h-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500" />
            </header>
            <ul className="flex flex-row gap-10 flex-wrap justify-center">
                {skills.map((skill, idx) => (
                    <li key={idx}>
                        <SkillCard {...skill} />
                    </li>
                ))}
            </ul>
        </section>
    );
}