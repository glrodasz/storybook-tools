import classNames from 'classnames';
import { getDynamicClasses } from './getDynamicClasses.js';
import { getModuleClasses } from './getModuleClasses.js';
import { getObjectClasses } from './getObjectClasses.js';
import { CSSModule, StyleProps, StyleObject } from './types.js';

export const getClasses =
  (cssModule: CSSModule) =>
  (props: StyleProps | Record<string, unknown>) =>
  (...args: (string | string[] | StyleObject)[]) => {
      return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(cssModule, props as StyleProps, arg);
        } else if (typeof arg === 'string') {
          return getModuleClasses(cssModule, arg);
        } else if (typeof arg === 'object') {
          return getObjectClasses(cssModule, arg);
        }
        return null;
      })
    );
  };
