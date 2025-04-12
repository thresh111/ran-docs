'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub as GithubIcon } from 'react-icons/fa';

import { Hero } from '@/components/hero';
import { Logo } from '@/components/logo';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { useIsMobile } from '@/hooks/use-mobile';

const logoWrapperVariants = {
  center: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
  topLeft: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 'auto',
    height: 'auto',
  },
};

const logoVariants = (isMobile: boolean) => ({
  center: {
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%',
    scale: 1,
  },
  topLeft: {
    top: 20,
    left: isMobile ? -36 : -43,
    x: 0,
    y: 0,
    scale: 0.6,
  },
});

const contentVariants = {
  hidden: {
    y: 2000,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 30 },
  },
};

export default function HomePage() {
  const isMobile = useIsMobile();
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-dvh overflow-hidden">
      <motion.div
        variants={logoWrapperVariants}
        initial="center"
        animate={transition ? 'topLeft' : 'center'}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className="fixed z-40 flex items-center justify-center"
      >
        <div className="relative w-full max-w-7xl h-full">
          <motion.div
            className="absolute"
            variants={logoVariants(isMobile)}
            initial="center"
            animate={transition ? 'topLeft' : 'center'}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            <Logo size={isMobile ? 'lg' : 'xl'} draw betaTag />
          </motion.div>

          <motion.div
            initial={{ top: 28, right: -43, opacity: 0 }}
            animate={
              transition
                ? { right: 20, opacity: 1 }
                : { right: -43, opacity: 0 }
            }
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="absolute z-40 flex items-center justify-end gap-x-4"
          >
            <a
              href="https://github.com/thresh111"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex sm:mt-1 items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5 text-fd-muted-foreground sm:[&_svg]:size-5.5"
              data-active="false"
            >
              <GithubIcon />
            </a>
            <ThemeSwitcher />
          </motion.div>
        </div>
      </motion.div>

      <div className="h-dvh w-full flex items-center">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={transition ? 'visible' : 'hidden'}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-4 "
        >
          <Hero />
        </motion.div>
      </div>
    </main>
  );
}
