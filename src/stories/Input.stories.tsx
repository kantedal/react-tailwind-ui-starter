// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import 'styles/main.css'
import Input, { InputProps } from '../base-components/Input'

export default {
  title: 'Example/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => (
  <div className='' style={{ width: 300 }}>
    <Input placeholder='Email...' {...args} />
  </div>
)

export const InputWithLabel = Template.bind({})
InputWithLabel.args = {
  label: 'Email',
}

export const InputWithError = Template.bind({})
InputWithError.args = {
  label: 'Email',
  error: 'Wrong format email address',
}

export const InputWithLabelAndHelpText = Template.bind({})
InputWithLabelAndHelpText.args = {
  label: 'Email',
  helpText: 'Enter your email address',
}
