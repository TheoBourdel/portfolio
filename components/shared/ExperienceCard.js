import React from 'react'
import StackCard from '../ui/stack-card'

export default function ExperienceCard({ school, active, name, location, description, stacks }) {
    return (
        <div className='flex flex-col w-full pr-4 pl-4 pb-4'>
            <header className='flex md:flex-row flex-col gap-4 md:items-center'>
                <h2 className='text-black dark:text-white font-semibold text-2xl'>{name}</h2>
                <div className='md:flex flex-row ml-auto gap-2 hidden'>
                    {active ? (
                        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 h-fit">En cours</span>
                    ) : (
                        <></>
                    )}
                    {school ? (
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 h-fit">School</span>
                        ) : (
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 h-fit">Work</span>                
                    )}
                </div>
            </header>
            <div className='flex flex-row gap-2'>
                <span className='dark:text-gray-400 text-gray-600 font-semibold'>
                    {location}
                </span>
                <div className='flex flex-row ml-auto gap-2 md:hidden'>
                    {active ? (
                        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 h-fit">En cours</span>
                    ) : (
                        <></>
                    )}
                    {school ? (
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 h-fit">School</span>
                        ) : (
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 h-fit">Work</span>                
                    )}
                </div>
            </div>
            <p className='dark:text-gray-300/80 text-gray-500 text-md mt-2'>{description}</p>
            <ul className='flex flex-row gap-4 mt-2 flex-wrap'>
                {stacks && stacks.map((stack, index) => (
                    <li key={index} className='list-inside'>
                        <StackCard name={stack.name} />
                    </li>
                    // <li key={index} className='list-inside text-white'>
                    //     <i className={`${stack.icon} ${stack.icon === 'devicon-symfony-original' || stack.icon === 'devicon-linux-plain' ? "" : "colored"} text-2xl`}></i>
                    // </li>
                ))}
            </ul>
        </div>
    )
}