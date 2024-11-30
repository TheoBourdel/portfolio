import React from 'react'
import Image from 'next/image'
import Project21 from '../../../public/images/project21.png'
import Link from 'next/link'

export default function page() {
  return (
    <section className='sm:mt-10'>
        <div className="relative">
        <Image src={Project21} alt='project-image' className="rounded-xl w-full object-cover sm:h-96 h-64" />
        <div className="absolute top-0 left-0 w-full h-full rounded-xl">
            <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 rounded-xl"></div>
            <h1 className="relative text-white text-3xl sm:text-6xl font-bold flex items-center justify-center h-full z-10">Memory</h1>
        </div>
        </div>
        <div className="mt-5 px-4 flex flex-row gap-4 flex-wrap">
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                VueJS
            </span>
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                NodeJS
            </span>
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                ExpressJS
            </span>
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                MongoDB
            </span>
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                Socket.io
            </span>
        </div>
        <div className='mt-16 px-4 flex flex-col gap-4'>
            <div className='flex flex-row items-center gap-6'>
                <hr className='w-5' />
                <span className='cursor-pointer hover:underline'>
                    <Link href="https://github.com/marouaneTalbi/nodejs_vuejs" target='_blank'>GitHub</Link>
                </span>
            </div>
                <div className='flex flex-row items-center gap-6'>
                <hr className='w-5' />
                <span className='cursor-pointer hover:underline'>
                    <Link href="https://www.figma.com/design/rV5JKCaVZQZgtlBeaF505x/Game-Project?node-id=0-1&t=oIq4yAXb8uVZ96O1-1" target='_blank'>Figma</Link>
                </span>
            </div>
            <div className='flex flex-row items-center gap-6' title='Plus disponible'>
                <hr className='w-5' />
                <span className='cursor-pointer line-through'>Visiter le site</span>
            </div>
        </div>
            <div className='mt-16 px-4'>
            <h4 className='text-2xl font-semibold mb-2'>Contexte</h4>
            <p className='dark:text-gray-300 text-gray-500'>
                Projet réalisé en groupe de 4 personnes pendant le 2ème semestre de ma 1er année de Master. On devait créer un mini jeu en temps réel sur une page web à l&aposaide de VueJs, NodeJS, MongoDB et Socket.io.
            </p>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Description</h4>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4 dark:text-gray-300/80 text-gray-500'>
            <li className='dark:text-gray-300 text-gray-500'>
                Inscription / Connexion
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Modération
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Jeu tour par tour avec événements en Temps réel
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Dashboard joueur
            </li>
            <li className='dark:text-gray-300 text-gray-500'>Dashboard admin</li>
          </ol>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Contraintes</h4>
        <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
                RESTFULL API
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Temps réel
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Paiement en ligne (stripe, …)
            </li>
          </ol>
      </div>
    </section>
  )
}
