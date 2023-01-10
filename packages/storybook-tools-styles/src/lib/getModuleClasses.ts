import { CSSModule, CSSClassName } from "./types.js";

export const getModuleClasses = (
  cssModule: CSSModule | null = {},
  classKey: string
): CSSClassName | string => {
  return cssModule?.[classKey] ?? classKey;
};
