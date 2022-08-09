import classNames from 'classnames';
import { getDynamicClasses } from './getDynamicClasses';
import { getModuleClasses } from './getModuleClasses';
import { getObjectClasses } from './getObjectClasses';
import { CSSModule, StyleProps, StyleObject } from './types';

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
