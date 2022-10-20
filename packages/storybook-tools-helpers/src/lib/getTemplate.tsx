import * as React from 'react';
import { getClasses, CSSModule } from '@glrodasz/storybook-tools-styles';
import type { StoryComponent } from './types';

export const getTemplate =
  (Component: StoryComponent, styles: CSSModule) =>
  (args: Record<string, any>) => {
    const allProps = { ...Component.defaultProps, ...args };
    return <Component {...args} getStyles={getClasses(styles)(allProps)} />;
  };
