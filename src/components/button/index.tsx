import { ButtonHTMLAttributes } from 'react'
import { NavLink } from 'react-router'

import arrow from '../../assets/arrow.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  path: string
}

export function Button({ path, ...rest }: ButtonProps) {
  return (
    <NavLink to={path}>
      <button
        className="bg-stone-900 flex items-center justify-center rounded-full p-2 w-8 h-8 hover:bg-stone-800/95"
        {...rest}
      >
        <img src={arrow} alt="" className="w-2" />
      </button>
    </NavLink>
  )
}
