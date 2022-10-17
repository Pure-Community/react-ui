import React, { FC } from 'react'
import { createElementClassNameFactory } from 'utils/classnames'
import style from './Button.module.scss'

interface ButtonProps {
    title: string
}

const Button: FC<ButtonProps> = ({ title }) => {
    const blockClassName = 'button'
    const getElementClassName = createElementClassNameFactory(blockClassName)

    return (
        <button className={style[blockClassName]}>
            <span className={style[getElementClassName('label')]}>{title}</span>
        </button>
    )
}

export default Button