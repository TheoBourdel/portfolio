import React from 'react'
import ThemeModeButton from './ThemeModeButton'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center py-4'>
        <Link href="/">
            <h1 className='dark:text-white font-bold text-2xl'>Bourdel Théo</h1>
        </Link>
        <nav className='ml-auto mr-6'>
            <ul className='flex flex-row gap-12'>
                <li className='dark:text-white'><Link href="/">Accueil</Link></li>
            </ul>
        </nav>
        <ThemeModeButton />
    </header>
  )
}