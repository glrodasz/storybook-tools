import { StyleObject } from '@glrodasz/storybook-tools-styles';

export type Args = Array<Record<string, unknown>>;

export type StoryComponent = React.FC<ComponentProps> & {
  defaultProps?: Partial<ComponentProps>;
};

export type ComponentProps = {
  getStyles?: () => string | StyleObject;
  children?: React.ReactNode;
} & Record<string, unknown>;
