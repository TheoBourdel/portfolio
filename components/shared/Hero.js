"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
      <>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-40 sm:mb-80 mt-40"
        >
          Bienvenue sur mon portfolio. Découvrez mes projets et mon expérience en{" "}
          <Highlight className="text-black dark:text-white">
            développement web.
          </Highlight>
        </motion.h1>
      </>
  );
}