import React from 'react'

export default function SkillCard({ name, description, icon }) {
  return (
    <div className='p-4 bg-gray-100/60 dark:bg-white/10 rounded-2xl border dark:border-white/20 hover:scale-110 transition-transform duration-300 ease-out'>
      <i className={`${icon} ${icon === 'devicon-symfony-original' || icon === 'devicon-linux-plain' || icon === 'devicon-socketio-original' ? "" : "colored"} text-5xl text-dark dark:text-white cursor-pointer`}></i>
    </div>
  )
}