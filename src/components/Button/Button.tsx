import { ClickableElement } from 'interfaces/dom'
import React, { FC, useEffect } from 'react'
import { ClassNamesGenerator } from 'utils/classnames'
import style from './Button.module.scss'

type ButtonType = 'filled' | 'outlined' | 'text'

type LabelType = 'uppercase' | 'capitalize'

interface ButtonProps extends ClickableElement {
    title: string,
    type?: ButtonType
    rounded?: boolean
    labelType?: LabelType
    short?: boolean
}

const Button: FC<ButtonProps> = ({
    title,
    labelType = 'uppercase',
    rounded = false,
    type = 'filled',
    onClick,
    short
}) => {
    const cnGetter = new ClassNamesGenerator('button', style)

    const resolveBlockMods = () => {
        let mods = [type.toString()]
        if (rounded) mods.push('rounded')
        if (short) mods.push('short')
        return mods
    }

    return (
        <button className={cnGetter.getBlockCN(...resolveBlockMods())} onClick={onClick}>
            <span className={cnGetter.getElementCN('label', labelType)}>{title}</span>
        </button>
    )
}

export default Button
export type { ButtonType, LabelType }