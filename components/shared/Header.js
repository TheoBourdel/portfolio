import React from 'react'
import ThemeModeButton from './ThemeModeButton'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center py-4'>
        <Link href="/">
            <h1 className='dark:text-white font-bold text-2xl'>Bourdel Théo</h1>
        </Link>
        {/* <nav>
            <ul className='flex flex-row gap-12'>
                <li className='dark:text-white'>Home</li>
                <li className='dark:text-white'>About</li>
                <li className='dark:text-white'>Contact</li>
            </ul>
        </nav> */}
        <ThemeModeButton />
    </header>
  )
}