import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { baseOptions } from '@/app/layout.config';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      links={[]}
      tree={source.pageTree}
      themeSwitch={{
        component: <ThemeSwitcher />,
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
