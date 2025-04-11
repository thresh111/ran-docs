'use client';

import { motion, type SVGMotionProps } from 'motion/react';

import { cn } from '@/lib/utils';

const sizes = {
  sm: {
    svg: 'h-6',
    betaTag: 'bottom-[2px] left-[calc(100%+6px)] px-1.5 py-0.5 text-[9px]',
  },
  lg: {
    svg: 'h-12',
    betaTag: 'bottom-[4px] left-[calc(100%+10px)] px-2 py-0.5 text-base',
  },
  xl: {
    svg: 'h-14',
    betaTag: 'bottom-[7px] left-[calc(100%+15px)] px-2.5 py-1 text-base',
  },
};

export const Logo = ({
  betaTag = false,
  draw = false,
  size = 'sm',
  className,
  containerClassName,
  ...props
}: {
  containerClassName?: string;
  betaTag?: boolean;
  draw?: boolean;
  size?: keyof typeof sizes;
} & SVGMotionProps<SVGSVGElement>) => {
  return (
    <div className={cn('relative', containerClassName)}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50" // 简化viewBox
        className={cn(sizes[size].svg, className)}
        {...props}
      >
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-4xl font-bold fill-current text-neutral-900 dark:text-neutral-100"
        >
          Ran Docs
        </motion.text>
      </motion.svg>

      {betaTag && (
        <motion.div
          className={cn(
            sizes[size].betaTag,
            'absolute bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full',
          )}
          initial={draw ? { opacity: 0 } : undefined}
          animate={draw ? { opacity: 1 } : undefined}
          transition={{ duration: 4, ease: 'easeInOut' }}
        >
          Beta
        </motion.div>
      )}

      <span className="sr-only">ran-docs</span>
    </div>
  );
};
