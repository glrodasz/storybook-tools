import type { CSSModule, StyleObject, CSSClassName } from "./types.js";

export const getObjectClasses = (
  cssModule: CSSModule,
  object: StyleObject
): { [key: CSSClassName]: boolean } => {
  return Object.keys(object).reduce((classes, classKey) => {
    const className = cssModule[classKey];
    return className ? { ...classes, [className]: object[classKey] } : classes;
  }, {});
};
