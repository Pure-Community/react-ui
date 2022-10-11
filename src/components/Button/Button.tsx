import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
    title: string
}

const Button: FC<ButtonProps> = ({ title }) => {
    return (
        <button className='button'>{title}</button>
    )
}

export default Button