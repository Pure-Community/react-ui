interface ClickableElement {
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | (() => void)

}

export type {ClickableElement}