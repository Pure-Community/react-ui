import { ClickableElement } from 'interfaces/dom';
import { FC } from 'react';
declare type ButtonType = 'filled' | 'outlined' | 'text';
declare type LabelType = 'uppercase' | 'capitalize';
interface ButtonProps extends ClickableElement {
    title: string;
    type?: ButtonType;
    rounded?: boolean;
    labelType?: LabelType;
    short?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
