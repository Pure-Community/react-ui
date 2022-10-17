import { ClickableElement } from 'interfaces/dom'
import React, { FC } from 'react'
import { createElementClassNameFactory } from 'utils/classnames'
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
    const blockClassName = 'button'
    const [elem, mod] = createElementClassNameFactory(blockClassName)

    const resolveBlockClassName = (): string => {
        let cn = [blockClassName, mod(type)]
        if (rounded) cn.push(mod('rounded'))
        if (short) cn.push(mod('short'))
        return cn.map(c => style[c]).join(' ')
    }

    const resolveElementClassName = (element: string, mods: string[] = []): string => {
        const [_, modd] = createElementClassNameFactory(elem(element))
        return [style[elem(element)], ...mods.map(m => style[modd(m)])].join(' ')
    }

    return (
        <button className={resolveBlockClassName()} onClick={onClick}>
            <span className={resolveElementClassName('label', [labelType])}>{title}</span>
        </button>
    )
}

export default Button

