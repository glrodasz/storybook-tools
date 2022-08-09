import * as React from 'react';
import {
  getClasses,
  CSSModule,
  StyleObject,
} from '@glrodasz/storybook-tools-styles';

type ComponentProps = {
  getStyles?: () => string | StyleObject;
  children?: JSX.Element[];
} & Record<string, any>;

export type StoryComponent = React.FC<ComponentProps>;

type Args = Array<Record<string, any>>;

export const getTemplate =
  (Component: StoryComponent, styles: CSSModule) =>
  (args: Record<string, any>) => {
    const allProps = { ...Component.defaultProps, ...args };
    return <Component {...args} getStyles={getClasses(styles)(allProps)} />;
  };

export const getListTemplate =
  (Component: StoryComponent, styles: CSSModule) =>
  ({ items, ...args }: { items: Args; args: Args }) =>
    items.map((item, index) => {
      const allProps = { ...Component.defaultProps, ...args, ...item };
      return (
        <Component
          key={index}
          {...args}
          {...item}
          getStyles={getClasses(styles)(allProps)}
        />
      );
    });

export const getOptionsArgTypes = (options: string[]) => ({
  description: '**options:**',
  table: {
    type: { summary: options.map((option) => `'${option}'`).join('|') },
  },
  control: { type: 'select', options },
});
