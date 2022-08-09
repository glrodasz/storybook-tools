import classNames from 'classnames';

type CSSClassName = `.${string}` | string;
type CSSModule = { [key: string]: CSSClassName };
type StyleProps = { [key: string]: string };
type StyleObject = { [key: string]: boolean };

export const getDynamicClasses = (
  cssModule: CSSModule,
  props: StyleProps,
  classes: string[]
): { [key: CSSClassName]: string } => {
  return classes.reduce((classesObject, classKey) => {
    const propValue = props[classKey];
    const className = cssModule[`${classKey}-${propValue}`];

    return className && propValue
      ? { ...classesObject, [className]: propValue }
      : classesObject;
  }, {});
};

export const getModuleClasses = (
  cssModule: CSSModule | null = {},
  classKey: string
): CSSClassName | string => {
  return cssModule?.[classKey] ?? classKey;
};

export const getObjectClasses = (
  cssModule: CSSModule,
  object: StyleObject
): { [key: CSSClassName]: boolean } => {
  return Object.keys(object).reduce((classes, classKey) => {
    const className = cssModule[classKey];
    return className ? { ...classes, [className]: object[classKey] } : classes;
  }, {});
};

export const getClasses =
  (cssModule: CSSModule) =>
  (props: StyleProps) =>
  (...args: (string | string[] | StyleObject)[]) => {
    return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(cssModule, props, arg);
        } else if (typeof arg === 'string') {
          return getModuleClasses(cssModule, arg);
        } else if (typeof arg === 'object') {
          return getObjectClasses(cssModule, arg);
        }
        return null;
      })
    );
  };
