import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from '../base-components/Checkbox'

export default {
  title: 'Clickables',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const checkbox = Template.bind({})
checkbox.args = {
  label: 'Checkbox',
  description: 'A checkbox',
}
