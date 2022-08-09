import { CSSModule, StyleProps } from './types';

export const getDynamicClasses = (
  cssModule: CSSModule,
  props: StyleProps,
  classes: string[]
): string => {
  return classes
    .reduce((classesString, classKey) => {
      const propValue = props[classKey];
      const className = cssModule[`${classKey}-${propValue}`];

      return className ? `${classesString} ${className}` : classesString;
    }, '')
    .trim();
};
