import React from 'react'
import Image from 'next/image'
import Project11 from '../../../public/images/project11.png'
import Link from 'next/link'

export default function WaterWays() {
  return (
    <section className='sm:mt-10'>
      <div className="relative">
        <Image src={Project11} alt='project-image' className="rounded-xl w-full object-cover sm:h-96 h-64" />
        <div className="absolute top-0 left-0 w-full h-full rounded-xl">
          <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 rounded-xl"></div>
          <h1 className="relative text-white text-3xl sm:text-6xl font-bold flex items-center justify-center h-full z-10">WaterWays</h1>
        </div>
      </div>
      <div className="mt-5 px-4 flex flex-row gap-4 flex-wrap">
        <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
          React
        </span>
        <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
          Api Plarform
        </span>
        <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
          TailwindCSS
        </span>
        <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
          GitHub Actions
        </span>
        <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
          Flowbite React
        </span>
      </div>
      <div className='mt-16 px-4 flex flex-col gap-4'>
        <div className='flex flex-row items-center gap-6'>
          <hr className='w-5' />
          <span className='cursor-pointer hover:underline'>
            <Link href='https://github.com/marouaneTalbi/waterways_project' target='_blank'>GitHub</Link>
          </span>
        </div>
        <div className='flex flex-row items-center gap-6'>
          <hr className='w-5' />
          <span className='cursor-pointer hover:underline'>
            <Link href="https://www.figma.com/design/XUnWhecisqFbg4B2yniMsr/Challenge-S1?node-id=0-1&node-type=canvas&t=Xe0UdfnPtYX1zmpd-0" target='_blank'>Figma</Link>
          </span>
        </div>
        <div className='flex flex-row items-center gap-6' title='Plus disponible'>
          <hr className='w-5' />
          <span className='cursor-pointer line-through'>Visiter le site</span>
        </div>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Contexte</h4>
        <p>
          Projet réalisé en groupe de 4 personnes pendant le 1er semestre de ma 2ème année de Master. On devait créer une plateforme de réservation de services en ligne à l'aide de ReactJS et Api Platform. On avait comme obligation aussi d'héberger notre projet sur un serveur et de mettre en place une CI/CD.
        </p>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Description</h4>
        <u className='dark:text-gray-300 text-gray-600'>En tant que client </u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4 dark:text-gray-300/80 text-gray-500'>
            <li className='dark:text-gray-300 text-gray-500'>
              Recherche avec filtres de prestation ou prestataire avec carte de géolocalisation (style AirBnB)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Landing page du prestataire avec les prestations disponible (ou celle sélectionnée)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Choix des créneaux disponibles avec possibilité de choisir parmi les emploi du temps de plusieurs salariés
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Espace de visualisation de ses réservations avec possibilité :
              <ul className='list-disc ml-6'>
                <li className='dark:text-gray-300 text-gray-500'>d'annuler</li>
                <li className='dark:text-gray-300 text-gray-500'>décaler le RDV</li>
                <li className='dark:text-gray-300 text-gray-500'>de reprendre RDV (même prestataire / même prestation / même salarié)</li>
              </ul>
            </li>
            <li className='dark:text-gray-300 text-gray-500'>Ajouter un feedback (plusieurs notes en fonction du thème de prestataire avec moyenne par catégorie) sur une prestation déjà réalisée </li>
          </ol>
          <u className='dark:text-gray-300 text-gray-600'>En tant que prestataire </u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4 dark:text-gray-300/80 text-gray-500'>
            <li className='dark:text-gray-300 text-gray-500'>
              Demander à devenir prestataire (avec validation du Kbis par un admin)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Dashboard avec statistiques
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Ajouter un ou plusieurs établissement avec plusieurs prestations possibles
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Gérer son équipe de salariés par établissement ou globalement
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Gérer les planning d’équipe :
              <ul className='list-disc ml-6'>
                <li className='dark:text-gray-300 text-gray-500'>créneau des jours de travail (trouver un système simple et flexible de planification)</li>
                <li className='dark:text-gray-300 text-gray-500'>créneau d’indisponibilité (congés)</li>
                <li className='dark:text-gray-300 text-gray-500'>chaque salarié doit avoir un planning personnel basé sur ses créneaux horaires </li>
              </ul>
            </li >
            <li className='dark:text-gray-300 text-gray-500'>Historique des réservations</li>
            <li className='dark:text-gray-300 text-gray-500'>Notification de nouvelle réservation</li>
          </ol>
          <u className='dark:text-gray-300 text-gray-600'>En tant qu’administrateur</u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
              Dashboard avec statistiques
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              CRUD complet pour l’ensemble des entités utilitaires 
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Notification des demandes de prestataire (email)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Validation des prestataires
            </li>
          </ol>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Contraintes</h4>
        <u className='dark:text-gray-300 text-gray-600'>Rest API avec API Platform</u>
        <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
              Minimum 6 ressources (dont 1 ressource qui n’est pas une entité)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Personnalisation des retours via Context Builder & Custom Normalizer
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Ressources sécurisées
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Extensions doctrine
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Opérations personnalisés
            </li>
          </ol>
          <u className='dark:text-gray-300 text-gray-600'>ReactJS</u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
              Implémenter les components de manière à respecter une organisation Atomic Design
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Implémenter des traductions FR et EN (local ou API)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Belle architecture de composants
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Mise en place du design pattern MVVC notamment par la mise en place de Contexte et custom hooks
            </li>
          </ol>
          <u className='dark:text-gray-300 text-gray-600'>Solutions de déploiements continus (CI&CD)</u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
              Gestion des pipelines front et back indépendantes
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Test unitaires/fonctionnels dans la CI
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Dissocier la CI de la CD
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Tests avant de merge le code sur la branche main (au moment de la pull request)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
              Mise en place d'outils collaboratifs
            </li>
          </ol>
      </div>
    </section>
  )
}