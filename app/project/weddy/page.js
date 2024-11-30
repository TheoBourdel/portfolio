import React from 'react'
import Image from 'next/image'
import Project41 from '../../../public/images/project41.png'
import Link from 'next/link'

export default function page() {
  return (
    <section className='sm:mt-10'>
        <div className="relative">
        <Image src={Project41} alt='project-image' className="rounded-xl w-full object-cover sm:h-96 h-64" />
        <div className="absolute top-0 left-0 w-full h-full rounded-xl">
            <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 rounded-xl"></div>
            <h1 className="relative text-white text-3xl sm:text-6xl font-bold flex items-center justify-center h-full z-10">Weddy</h1>
        </div>
        </div>
        <div className="mt-5 px-4 flex flex-row gap-4 flex-wrap">
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                Flutter
            </span>
            <span className='flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 py-[2px] px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30 w-fit'>
                Golang
            </span>
        </div>
        <div className='mt-16 px-4 flex flex-col gap-4'>
            <div className='flex flex-row items-center gap-6'>
                <hr className='w-5 dark:border-white border-black' />
                <span className='cursor-pointer hover:underline'>
                    <Link href="https://github.com/TheoBourdel/wedding-app" target='_blank'>GitHub</Link>
                </span>
            </div>
                <div className='flex flex-row items-center gap-6'>
                <hr className='w-5 dark:border-white border-black' />
                <span className='cursor-pointer hover:underline'>
                    <Link href="https://www.figma.com/design/mGmIW5yZ8bzUWrvTBgIsvj/Challenge-S2?node-id=0-1&t=mjHhVQyKLVxek7Za-1" target='_blank'>Figma</Link>
                </span>
            </div>
            <div className='flex flex-row items-center gap-6' title='Plus disponible'>
                <hr className='w-5 dark:border-white border-black' />
                <span className='cursor-pointer line-through'>Télécharger le SDK</span>
            </div>
        </div>
            <div className='mt-16 px-4'>
            <h4 className='text-2xl font-semibold mb-2'>Contexte</h4>
            <p className='dark:text-gray-300 text-gray-500'>
                Projet réalisé en groupe de 4 personnes pendant le 2ème semestre de ma 2ème année de Master. Le but de ce projet est de réaliser des applications Flutter mobile et web sʼinterfaçant avec une
                API Golang pour gérer des groupes de personnes autour dʼune thématique commune (école,
                concert, voyage, sport, événement…). Il sera nécessaire de trouver un sujet correspondant
                aux fonctionnalités principales décrites ci-après et de le faire valider par les coachs lors de la
                première journée
            </p>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Description</h4>
        <u className='dark:text-gray-300 text-gray-600'>Golang</u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4 dark:text-gray-300/80 text-gray-500'>
            <li className='dark:text-gray-300 text-gray-500'>
                API REST
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>Système dʼauthentification (au minimum via login / mot de passe)</li>
                    <li className='dark:text-gray-300 text-gray-500'>Gestion multi-rôles (utilisateur simple, administrateur…), vérification des droits et
                        filtrage des résultats lors des requêtes en fonction du rôle de lʼutilisateur connecté</li>
                    <li className='dark:text-gray-300 text-gray-500'>Interface Swagger UI pour interagir avec lʼAPI</li>
                    <li className='dark:text-gray-300 text-gray-500'>API CRUD sur les éléments fonctionnels de lʼapplication</li>
                </ul>
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                API Web Socket fournissant au moins une fonctionnalité temps-réel
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Configuration modifiable (via fichier de conf, variables dʼenvironnement, base de
                données…)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Logs formatés consultables
            </li>
            <li className='dark:text-gray-300 text-gray-500'>Base de données relationnelle avec jeu de données conséquent représentatif des cas
            dʼusages de lʼapplication</li>
            <li className='dark:text-gray-300 text-gray-500'>
                Feature flipping : possibilité dʼactiver ou désactiver certaines fonctionnalités de sans
                redémarrer lʼapplication
            </li>
          </ol>
          <u className='dark:text-gray-300 text-gray-600'>Flutter</u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4 dark:text-gray-300/80 text-gray-500'>
            <li className='dark:text-gray-300 text-gray-500'>
                Application mobile (iOS & Android)
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>Écrans différents en fonction des rôles de lʼutilisateur</li>
                    <li className='dark:text-gray-300 text-gray-500'>Envoi de notifications push</li>
                    <li className='dark:text-gray-300 text-gray-500'>Utilisation dʼune technologie pseudo temps réel</li>
                    <li className='dark:text-gray-300 text-gray-500'>Intégration du multilingue</li>
                </ul>
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Application web
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>Panel dʼadministration cohérent pour contrôler les différentes entités du projet</li>
                    <li className='dark:text-gray-300 text-gray-500'>Affichage des événements survenant au sein de lʼapplication pour consultation</li>
                </ul>
            </li>

          </ol>
      </div>
      <div className='mt-16 px-4'>
        <h4 className='text-2xl font-semibold mb-2'>Contraintes</h4>
        <u className='dark:text-gray-300 text-gray-600'>Golang</u>
        <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
                Utilisation de Go 1.22.1
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Base de données Postgresql
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                API stateless, avec pagination des résultats
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Configuration modifiable (fichier de conf, variables dʼenvironnement, base de données…)
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Tests : 
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>tests unitaires sur les règles de gestions de lʼapplications</li>
                    <li className='dark:text-gray-300 text-gray-500'>tests dʼintégration sur les endpoints de lʼAPI</li>
                    <li className='dark:text-gray-300 text-gray-500'>tester aussi les cas dʼerreurs</li>
                </ul>
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Erreurs :
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>pas de “panicˮ dans le code, les erreurs doivent être correctement gérées</li>
                    <li className='dark:text-gray-300 text-gray-500'>renvoyer des erreurs fonctionnelles par lʼAPI et afficher le details des erreurs techniques dans les logs</li>
                </ul>
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Sécurité :
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>API hébergée en HTTPS avec certificat SSL</li>
                    <li className='dark:text-gray-300 text-gray-500'>Respect des normes de développement standard (OWASP)</li>
                </ul>
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Clean code :
                <ul className='list-disc ml-6'>
                    <li className='dark:text-gray-300 text-gray-500'>Le code doit être découpé en fichiers et dossiers cohérents et respecter les règles du clean code et SOLID (découpage, noms des variables et fonctions…)</li>
                    <li className='dark:text-gray-300 text-gray-500'>Code formaté et indenté avec Gofmt</li>
                </ul>
            </li>
          </ol>
          <u className='dark:text-gray-300 text-gray-600'>Flutter</u>
          <ol className='flex flex-col list-disc ml-6 mt-4 mb-4'>
            <li className='dark:text-gray-300 text-gray-500'>
                Utilisation de plusieurs émulateurs ou terminaux pendant la soutenance pour faire les démonstrations nécessaires en fonction des différents profils
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Lʼapplication devra être visuellement responsive en fonction de la taille du téléphone / navigateur
            </li>
            <li className='dark:text-gray-300 text-gray-500'>
                Le code rendu doit être propre et indenté correctement via les outils de base mis à disposition
            </li>
        </ol>
      </div>
    </section>
  )
}
