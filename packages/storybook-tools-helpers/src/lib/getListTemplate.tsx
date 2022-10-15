import * as React from 'react';
import { getClasses, CSSModule } from '@glrodasz/storybook-tools-styles';

import { StoryComponent } from './getTemplate';

type Args = Array<Record<string, any>>;

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
