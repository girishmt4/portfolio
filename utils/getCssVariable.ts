// src/utils/getCssVariable.ts
export const getCssVariable = (variable: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};
