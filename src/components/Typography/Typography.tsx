import React, { FC, useEffect } from 'react'
import { ClassNamesGenerator } from 'utils/classnames'
import style from './Typography.module.scss'

interface TextContentElementProps {
    children?: React.ReactNode
}

const H1: FC<TextContentElementProps> = ({ children }) => {
    return (
        <h1 className={style.h1}>{children}</h1>
    )
}

const H2: FC<TextContentElementProps> = ({ children }) => {
    return (
        <h2 className={style.h2}>{children}</h2>
    )
}

const H3: FC<TextContentElementProps> = ({ children }) => {
    return (
        <h3 className={style.h3}>{children}</h3>
    )
}

const H4: FC<TextContentElementProps> = ({ children }) => {
    return (
        <h4 className={style.h4}>{children}</h4>
    )
}

const H5: FC<TextContentElementProps> = ({ children }) => {
    return (
        <h5 className={style.h5}>{children}</h5>
    )
}

const H6: FC<TextContentElementProps> = ({ children }) => {
    return (
        <h6 className={style.h6}>{children}</h6>
    )
}

export { H1, H2, H3, H4, H5, H6 }