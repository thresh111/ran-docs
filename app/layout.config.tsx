import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { Logo } from '@/components/logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo containerClassName="mt-0.5 mb-2.5" size="sm" betaTag />,
  },
};
