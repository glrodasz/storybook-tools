import * as React from 'react'  ;
import { getClasses, CSSModule } from '@glrodasz/storybook-tools-styles';
import type { StoryComponent, Args } from './types.js';

export const getListTemplate =
  (Component: StoryComponent, styles: CSSModule) =>
  ({ items, ...args }: { items: Args; args: Record<string, any> }) =>
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
