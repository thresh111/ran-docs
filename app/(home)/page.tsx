'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { FaGithub as GithubIcon, FaBook as NotesIcon } from 'react-icons/fa';
import { MdArticle as ArticleIcon } from 'react-icons/md';

import { Logo } from '@/components/logo';
import { FireworksBackground } from '@/components/ran-motion/fireworks';
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
  const { theme } = useTheme();

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
            <Logo size={isMobile ? 'lg' : 'xl'} draw />
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
              href="/docs"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <NotesIcon />
              <span className="hidden sm:inline">笔记</span>
            </a>
            <a
              href="https://juejin.cn/user/1808054277126135?utm_source=gold_browser_extension"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <ArticleIcon />
              <span className="hidden sm:inline">博客</span>
            </a>
            <a
              href="https://github.com/thresh111"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5 text-fd-muted-foreground"
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
          className="w-full flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">欢迎来到我的知识库</h1>
            <p className="text-lg text-fd-muted-foreground mb-8">
              这里记录着我的学习笔记、技术博客和个人思考
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/docs"
                className="px-6 py-2 bg-fd-primary text-fd-primary-foreground rounded-md hover:bg-fd-primary/90 transition-colors"
              >
                浏览笔记
              </a>
              <a
                href="https://juejin.cn/user/1808054277126135?utm_source=gold_browser_extension"
                className="px-6 py-2 bg-fd-secondary text-fd-secondary-foreground rounded-md hover:bg-fd-secondary/90 transition-colors"
              >
                阅读博客
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <FireworksBackground
        className="absolute inset-0 flex items-center justify-center rounded-xl -z-10"
        color={theme === 'dark' ? 'white' : 'black'}
      />
    </main>
  );
}
