'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { CopyButton } from './copy-button';
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
  type TabsProps,
} from './tabs';
import { cn } from '@/lib/utils';

type InstallTabsProps = {
  commands: Record<string, string>;
  lang?: string;
  themes?: {
    light: string;
    dark: string;
  };
  copyButton?: boolean;
  onCopy?: (content: string) => void;
} & Omit<TabsProps, 'children'>;

const InstallTabs = React.forwardRef<HTMLDivElement, InstallTabsProps>(
  (
    {
      commands,
      lang = 'bash',
      themes = {
        light: 'github-light',
        dark: 'github-dark',
      },
      className,
      defaultValue,
      value,
      onValueChange,
      copyButton = true,
      onCopy,
      ...props
    },
    ref,
  ) => {
    const { resolvedTheme } = useTheme();

    const [highlightedCommands, setHighlightedCommands] = React.useState<Record<
      string,
      string
    > | null>(null);
    const [selectedCommand, setSelectedCommand] = React.useState<string>(
      value ?? defaultValue ?? Object.keys(commands)[0],
    );

    React.useEffect(() => {
      async function loadHighlightedCode() {
        try {
          const { codeToHtml } = await import('shiki');
          const newHighlightedCommands: Record<string, string> = {};

          for (const [command, val] of Object.entries(commands)) {
            const highlighted = await codeToHtml(val as string, {
              lang,
              themes: {
                light: themes.light,
                dark: themes.dark,
              },
              defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
            });

            newHighlightedCommands[command] = highlighted;
          }

          setHighlightedCommands(newHighlightedCommands);
        } catch (error) {
          console.error('Error highlighting commands', error);
          setHighlightedCommands(commands);
        }
      }
      loadHighlightedCode();
    }, [commands, resolvedTheme, lang, themes.light, themes.dark]);

    return (
      <Tabs
        ref={ref}
        className={cn(
          'w-full gap-0 rounded-lg border overflow-hidden',
          className,
        )}
        {...(props as Omit<
          TabsProps,
          'value' | 'defaultValue' | 'onValueChange'
        >)}
        value={selectedCommand}
        onValueChange={(val: string) => {
          setSelectedCommand(val);
          onValueChange?.(val);
        }}
      >
        <TabsList
          className="w-full relative justify-between rounded-none h-9 bg-muted text-current py-0 px-4"
          activeClassName="rounded-none shadow-none bg-transparent after:content-[''] after:absolute after:inset-x-0 after:h-0.5 after:bottom-0 dark:after:bg-white after:bg-black after:rounded-t-full"
        >
          <div className="flex gap-x-3 h-full">
            {highlightedCommands &&
              Object.keys(highlightedCommands).map((command) => (
                <TabsTrigger
                  key={command}
                  value={command}
                  className="text-muted-foreground data-[state=active]:text-current px-0 hover:cursor-pointer"
                >
                  {command}
                </TabsTrigger>
              ))}
          </div>

          {copyButton && highlightedCommands && (
            <CopyButton
              content={commands[selectedCommand]}
              size="sm"
              variant="ghost"
              className="-mr-2.5 bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
              onCopy={onCopy}
            />
          )}
        </TabsList>
        <TabsContents className="h-12 bg-background">
          {highlightedCommands &&
            Object.entries(highlightedCommands).map(([command, val]) => (
              <TabsContent
                key={command}
                className="h-12 w-full text-sm flex items-center px-4 overflow-auto"
                value={command}
              >
                <div
                  className="[&>pre,_&_code]:!bg-transparent [&>pre,_&_code]:[background:transparent_!important] [&>pre,_&_code]:border-none [&_code]:!text-[13px]"
                  dangerouslySetInnerHTML={{ __html: val }}
                />
              </TabsContent>
            ))}
        </TabsContents>
      </Tabs>
    );
  },
);

InstallTabs.displayName = 'InstallTabs';

const commands = {
  npm: `npx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  pnpm: `pnpm dlx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  yarn: `npx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  bun: `bun x --bun shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
};

export const InstallTabsDemo = () => {
  return (
    <InstallTabs
      defaultValue="pnpm"
      className="max-w-[650px]"
      commands={commands}
    />
  );
};

export { InstallTabs, type InstallTabsProps };
