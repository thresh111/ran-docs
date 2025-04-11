import { BsFiletypeCss, BsFiletypeHtml, BsFiletypeJs } from 'react-icons/bs';
import { FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiTypeorm,
  SiVite,
  SiWebpack,
} from 'react-icons/si';

import { InfiniteSlider } from './InfiniteSlider';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export default function IntegrationsSection() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
            <div
              role="presentation"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
            ></div>

            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
              <IntegrationCard>
                <BsFiletypeHtml />
              </IntegrationCard>
              <IntegrationCard>
                <BsFiletypeCss />
              </IntegrationCard>
              <IntegrationCard>
                <BsFiletypeJs />
              </IntegrationCard>
              <IntegrationCard>
                <BsFiletypeJs />
              </IntegrationCard>
            </InfiniteSlider>

            <InfiniteSlider gap={24} speed={40} speedOnHover={10}>
              <IntegrationCard>
                <FaReact color="#61DAFB" /> {/* React 品牌蓝 */}
              </IntegrationCard>
              <IntegrationCard>
                <FaVuejs color="#4FC08D" /> {/* Vue.js 品牌绿 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiWebpack color="#8DD6F9" /> {/* Webpack 浅蓝 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiVite color="#646CFF" /> {/* Vite 紫色 */}
              </IntegrationCard>
            </InfiniteSlider>

            <InfiniteSlider gap={24} speed={30} speedOnHover={10}>
              <IntegrationCard>
                <FaNodeJs color="#339933" /> {/* Node.js 绿色 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiNestjs color="#E0234E" /> {/* NestJS 深红色 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiPrisma color="#5A67D8" /> {/* Prisma 深蓝灰色 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiTypeorm color="#e83524" /> {/* TypeORM 品红色 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiMysql color="#00758F" /> {/* MySQL 海洋蓝 */}
              </IntegrationCard>
              <IntegrationCard>
                <SiMongodb color="#00ED64" /> {/* MongoDB 标志绿 */}
              </IntegrationCard>
            </InfiniteSlider>

            <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
              <IntegrationCard
                className="shadow-black-950/10 size-22 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                isCenter={true}
              >
                <Logo className={'ml-[-32px] mt-[10px]'} />
              </IntegrationCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | 'left-top'
    | 'left-middle'
    | 'left-bottom'
    | 'right-top'
    | 'right-middle'
    | 'right-bottom';
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        'bg-background relative z-20 flex size-12 rounded-full border',
        className,
      )}
    >
      <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>
        {children}
      </div>
    </div>
  );
};
