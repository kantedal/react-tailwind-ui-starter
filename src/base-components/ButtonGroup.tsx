import React, { DetailedHTMLProps, FC, useMemo } from 'react'

interface item {
  text?: string
  icon?: string
}

export interface ButtonGroupProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | null
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | null
  buttonItems: item[]
  classes?: string
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, size, variant, buttonItems, classes }) => {
  const baseClass = `items-center font-medium  border border-transparent focus:outline-none transition ease-in-out duration-150`

  const variantClass = useMemo(() => {
    if (variant === 'primary' || variant == null) {
      return 'shadow-sm text-white bg-indigo-600 focus:border-indigo-600 focus:shadow-outline-indigo active:bg-indigo-600 hover:bg-indigo-400'
    }

    if (variant === 'secondary') {
      return 'text-indigo-600 bg-indigo-100 hover:bg-indigo-50 focus:shadow-outline-indigo active:bg-indigo-200'
    }

    if (variant === 'tertiary') {
      return 'text-gray-700 bg-gray-100 border-gray-300 font-medium hover:bg-gray-50 focus:shadow-outline-gray-500 focus:outline-gray-500 focus:bg-white focus:ring-1'
    }
  }, [variant])

  const sizeClass = useMemo(() => {
    if (size === 'xs') {
      return 'px-2.5 p-1.5 text-xs leading-4 '
    }

    if (size === 'sm') {
      return 'px-3 py-2 text-sm leading-5 '
    }

    if (size === 'base' || null) {
      return 'px-4 py-2 text-sm leading-5'
    }

    if (size === 'lg') {
      return 'px-4 py-2 text-base leading-6'
    }

    if (size === 'xl') {
      return 'px-6 py-3 text-base leading-6'
    }
  }, [size])

  const baseClassName = `${variantClass} ${sizeClass} relative items-center border text-sm focus:z-10 ${classes}`
  const leftClassName = `${baseClassName} rounded-l-md `
  const middleClassName = `${baseClassName} -ml-px  `
  const rightClassName = `${baseClassName} -ml-px rounded-r-md `

  return (
    <span className='relative z-0 inline-flex shadow-sm rounded-md'>
      {buttonItems.map((item, index) => (
        <div className='contents'>
          <button type='button' className={index == 0 ? leftClassName : index != buttonItems.length - 1 ? middleClassName : rightClassName}>
            {item.text}
          </button>
        </div>
      ))}
    </span>
  )
}

export default ButtonGroup
