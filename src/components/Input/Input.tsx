import { ChangableElement } from 'interfaces/dom'
import React, { FC, useEffect, useState } from 'react'
import { ClassNamesGenerator } from 'utils/classnames'
import style from './Input.module.scss'

interface InputProps extends ChangableElement {
    label?: string
    errorMessage?: string
    value?: string
}

const Input: FC<InputProps> = ({
    label,
    onChange,
    errorMessage,
    value
}) => {
    const cnGetter = new ClassNamesGenerator('input', style)
    const id = Math.random().toString(16)

    const resolveFieldMods = () => {
        let mods = []
        if (errorMessage) mods.push('error')
        return mods
    }

    return (
        <div className={cnGetter.getBlockCN()}>
            {label ? <label className={cnGetter.getElementCN('label')} htmlFor={id}>{label}</label> : null}
            <input className={cnGetter.getElementCN('field', ...resolveFieldMods())} id={id} value={value} onChange={onChange}></input>
            {errorMessage ? <p className={cnGetter.getElementCN('error-message')}>{errorMessage}</p> : null}
        </div>
    )
}

export default Input

