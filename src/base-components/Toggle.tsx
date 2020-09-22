import React, { FC } from 'react'

interface Props {
  toggled: boolean
  onChange: (toggled: boolean) => void
}

const Toggle: FC<Props> = ({ toggled, onChange }) => {
  const handleToggle = () => onChange(!toggled)
  return (
    <span
      role='checkbox'
      onClick={handleToggle}
      aria-checked='false'
      className={`${
        toggled ? 'bg-indigo-600' : 'bg-gray-200'
      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
    >
      <span
        aria-hidden='true'
        className={`${
          toggled ? 'translate-x-5' : 'translate-x-0'
        } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
      />
    </span>
  )
}

export default Toggle
