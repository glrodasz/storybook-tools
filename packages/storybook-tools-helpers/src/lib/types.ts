import { StyleObject } from '@glrodasz/storybook-tools-styles';

export type Args = Array<Record<string, any>>;

export type StoryComponent = React.FC<ComponentProps>;

export type ComponentProps = {
  getStyles?: () => string | StyleObject;
  children?: JSX.Element[];
} & Record<string, any>;
