import React, { FC, InputHTMLAttributes } from 'react'

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helpText?: string
  error?: string
  classes?: { root?: string; input?: string }
}

const TextArea: FC<TextAreaProps> = ({ label, helpText, error, classes, ...rest }) => {
  return (
    <div className={classes?.root}>
      {label && <label className='block text-sm font-medium leading-5 text-gray-700'>{label}</label>}
      <div className='mt-1 relative rounded-md shadow-sm'>
        <textarea
          className={`form-input block w-full sm:text-sm sm:leading-5 ${classes?.input} ${
            Boolean(error) && 'pr-10 border-red-300 text-red-900  placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
          }`}
          {...rest}
        />
        {Boolean(error) && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <svg className='h-5 w-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}
      </div>
      {Boolean(helpText) && !Boolean(error) && (
        <p className='mt-2 text-sm text-gray-500' id='email-description'>
          {helpText}
        </p>
      )}
      {Boolean(error) && (
        <p className='mt-2 text-sm text-red-600' id='email-error'>
          {error}
        </p>
      )}
    </div>
  )
}

export default TextArea
