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

export const getTemplate =
  (Component: StoryComponent, styles: CSSModule) =>
  (args: Record<string, any>) => {
    const allProps = { ...Component.defaultProps, ...args };
    return <Component {...args} getStyles={getClasses(styles)(allProps)} />;
  };
