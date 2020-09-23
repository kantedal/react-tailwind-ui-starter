import React, { FC, InputHTMLAttributes } from 'react'

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

const RadioButton: FC<RadioButtonProps> = ({ label, description, ...rest }) => {
  return (
    <div className='flex items-start my-2'>
      <div className='flex items-center h-5'>
        <input {...rest} type='radio' className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out' />
      </div>
      <div className='ml-3 text-sm leading-5'>
        {label && (
          <label htmlFor={rest.id} className='font-medium text-gray-700'>
            {label}
          </label>
        )}
        {description && <p className='text-gray-500'>{description}</p>}
      </div>
    </div>
  )
}

export default RadioButton
