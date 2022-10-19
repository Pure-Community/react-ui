/// <reference types="react" />
interface ClickableElement {
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | (() => void);
}
interface ChangableElement {
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | (() => void);
}
export type { ClickableElement, ChangableElement };
