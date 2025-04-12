'use client';

import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 pt-8 w-full flex flex-col gap-10">
      <div className="lg:max-w-[50%] max-w-[700px] space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-[43px] font-semibold text-neutral-800 dark:text-white !leading-relaxed lg:!leading-snug text-start">
          Ran's Daily Docs
        </h1>

        <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
          This is where I post my work-in-progress ideas, practice notes, and
          explorations during my free time.
        </p>

        <div className="flex sm:flex-row flex-col sm:gap-5 gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="w-fit rounded-full pr-5" asChild>
              <Link href="/docs">
                Link my notes <ArrowRightIcon className="!size-5" />
              </Link>
            </Button>
          </motion.div>

          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-fit rounded-full"
              variant="neutral"
              asChild
            >
              <Link href="/docs/components">ran motion ui</Link>
            </Button>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};
