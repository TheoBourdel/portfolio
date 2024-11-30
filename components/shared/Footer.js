import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-row justify-between items-center py-8 mt-auto border-t dark:border-white/20 border-black/10 mt-6'>
        <div>
            <span className='text-black dark:text-white'>Copyright © 2024 | All Rights Reserved to Bourdel Théo</span>
        </div>
        <div className='flex flex-row gap-6'>
            <a href='https://github.com/TheoBourdel' target='_blank'><i className="devicon-github-original dark:text-white text-black text-3xl cursor-pointer"></i></a>
            <a href='https://www.linkedin.com/in/th%C3%A9o-bourdel-3790a81a4/' target='_blank'><i className="devicon-linkedin-plain dark:text-white text-black text-3xl cursor-pointer"></i></a>
        </div>
    </footer>
  )
}
