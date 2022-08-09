export type CSSClassName = `.${string}` | string;

export type CSSModule = Record<string, CSSClassName>

export type StyleProps = Record<string, string>;

export type StyleObject = Record<string, boolean>;
