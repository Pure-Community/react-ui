import { ChangableElement } from 'interfaces/dom';
import { FC } from 'react';
interface InputProps extends ChangableElement {
    label?: string;
    errorMessage?: string;
    value?: string;
}
declare const Input: FC<InputProps>;
export default Input;
