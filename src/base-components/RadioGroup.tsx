import React, { FC, Fragment } from 'react'
import RadioButton from './RadioButton'

interface RadioGroupItem {
  id: string
  title?: string
  description?: string
}

export interface RadioGroupProps {
  value: string
  items: RadioGroupItem[]
}

const RadioGroup: FC<RadioGroupProps> = ({ value, items }) => {
  return (
    <fieldset>
      {items.map((item) => (
        <Fragment key={item.id}>
          <RadioButton value={item.id} checked={value === item.id} />
          <div className='h-4' />
        </Fragment>
      ))}
    </fieldset>
  )
}

export default RadioGroup
