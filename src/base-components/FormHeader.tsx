import React, { FC } from 'react'

interface Props {
  title?: string
  description?: string
  className?: string
}

const FormHeader: FC<Props> = ({ title, description, className }) => {
  return (
    <div className={className}>
      {title && <h3 className='text-lg leading-6 font-medium text-gray-900'>{title}</h3>}
      {description && <p className='mt-1 max-w-2xl text-sm leading-5 text-gray-500'>{description}</p>}
    </div>
  )
}

export default FormHeader
