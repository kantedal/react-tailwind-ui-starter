import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import RadioGroup, { RadioGroupProps } from '../base-components/RadioGroup'

export default {
  title: 'Radio',
  component: RadioGroup,
} as Meta

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />

export const radioGroup = Template.bind({})
radioGroup.args = {
  value: 'first',
  items: [
    { id: 'first', label: 'First', description: 'The first item' },
    { id: 'second', label: 'Second', description: 'The second item' },
  ],
}
