import * as React from 'react';
import { getClasses, CSSModule } from '@glrodasz/storybook-tools-styles';
import type { StoryComponent, Args } from './types';

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
