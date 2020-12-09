import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import RadioButton, { RadioButtonProps } from '../base-components/RadioButton'

export default {
  title: 'Radio',
  component: RadioButton,
} as Meta

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

export const radioButton = Template.bind({})
radioButton.args = {
  label: 'Radio Button',
  description: 'A radio button',
}
