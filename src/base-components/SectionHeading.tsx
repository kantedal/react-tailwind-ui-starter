import React, { FC } from 'react'

interface SectionHeadingProps {
  title?: string
  description?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, description }) => {
  return (
    <div className='pb-5 border-b border-gray-200 space-y-2'>
      {title && <h3 className='text-lg leading-6 font-medium text-gray-900'>{title}</h3>}
      {description && <p className='max-w-4xl text-sm leading-5 text-gray-500'>{description}</p>}
    </div>
  )
}

export default SectionHeading
