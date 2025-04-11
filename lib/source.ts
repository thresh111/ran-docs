import { createElement } from 'react';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';

import { attachFile } from './attach-file';
import { docs } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
