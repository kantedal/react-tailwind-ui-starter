import React, { DetailedHTMLProps, FC, useMemo } from 'react'

export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'primary' | 'secondary' | null
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | null
}

const Button: FC<ButtonProps> = ({ children, size, variant }) => {
  const baseClass = `items-center font-medium  border border-transparent focus:outline-none transition ease-in-out duration-150`

  const variantClass = useMemo(() => {
    if (variant === 'primary' || variant == null) {
      return 'shadow-sm text-white bg-indigo-600 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 hover:bg-indigo-500'
    }

    if (variant === 'secondary') {
      return 'text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:shadow-outline-indigo active:bg-indigo-200'
    }
  }, [variant])

  const sizeClass = useMemo(() => {
    if (size === 'xs') {
      return 'px-2.5 p-1.5 text-xs leading-4 rounded'
    }

    if (size === 'sm') {
      return 'px-3 py-2 text-sm leading-5 rounded-md'
    }

    if (size === 'base' || null) {
      return 'px-4 py-2 text-sm leading-5 rounded-md'
    }

    if (size === 'lg') {
      return 'px-4 py-2 text-base leading-6 rounded-md'
    }

    if (size === 'xl') {
      return 'px-6 py-3 text-base leading-6 rounded-md'
    }
  }, [size])

  return <button className={`${baseClass} ${variantClass} ${sizeClass}`}>{children}</button>
}

export default Button
