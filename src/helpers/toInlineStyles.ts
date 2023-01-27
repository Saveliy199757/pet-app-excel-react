import { camelToDashCase } from "./camelToDashCase";

export function toInlineStyles(styles: any = {}) {
  return Object.keys(styles)
    .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
    .join(";");
}
