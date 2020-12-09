import React, { FC } from 'react'

interface FormItemProps {
  title?: string
  description?: string
}

const FormItem: FC<FormItemProps> = ({ children, title, description }) => {
  return (
    <div className='sm:grid mt-5 sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
      <div className='pr-8'>
        {title && <label className='block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2'>{title}</label>}
        {description && <div className='block text-xs mt-2 leading-5 text-gray-500'>{description}</div>}
      </div>
      <div className='mt-1 sm:mt-0 sm:col-span-2'>{children}</div>
    </div>
  )
}

export default FormItem
