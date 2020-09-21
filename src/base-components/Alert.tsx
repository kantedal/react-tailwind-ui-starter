import React, { FC, useMemo } from 'react'

interface Props {
  variant: 'success' | 'warning' | 'error'
}

const Alert: FC<Props> = ({ variant }) => {
  const baseClass = useMemo(() => {
    if (variant === 'success') {
      return 'bg-green-50'
    }

    if (variant === 'warning') {
      return 'bg-yellow-50'
    }

    if (variant === 'error') {
      return 'bg-red-50'
    }
  }, [variant])

  const iconClass = useMemo(() => {
    if (variant === 'success') {
      return 'text-green-400'
    }

    if (variant === 'warning') {
      return 'text-yellow-400'
    }

    if (variant === 'error') {
      return 'text-red-400'
    }
  }, [variant])

  const buttonClass = useMemo(() => {
    if (variant === 'success') {
      return 'text-green-500 hover:bg-green-100 focus:bg-green-100'
    }

    if (variant === 'warning') {
      return 'text-yellow-500 hover:bg-yellow-100 focus:bg-yellow-100'
    }

    if (variant === 'error') {
      return 'text-red-500 hover:bg-red-100 focus:bg-red-100'
    }
  }, [variant])

  const infoMessageClass = useMemo(() => {
    if (variant === 'success') {
      return 'text-green-700'
    }

    if (variant === 'warning') {
      return 'text-yellow-700'
    }

    if (variant === 'error') {
      return 'text-red-700'
    }
  }, [variant])

  return (
    <div className={`${baseClass} rounded-md p-4 shadow-xl`}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <svg className={`h-5 w-5 ${iconClass}`} viewBox='0 0 20 20' fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
        <div className='ml-3'>
          <div className={`text-sm leading-5 ${infoMessageClass}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur.</p>
          </div>
          {/* <div className='mt-4'>
            <div className='-mx-2 -my-1.5 flex'>
              <button className='px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150'>
                View status
              </button>
              <button className='ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150'>
                Dismiss
              </button>
            </div>
          </div> */}
        </div>
        <div className='ml-auto pl-6'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              className={`${buttonClass} inline-flex rounded-md p-1.5 focus:outline-none transition ease-in-out duration-150`}
              aria-label='Dismiss'
            >
              <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
