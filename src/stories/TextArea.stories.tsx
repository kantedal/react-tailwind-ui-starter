import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import TextArea, { TextAreaProps } from '../base-components/TextArea'

export default {
  title: 'TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const textArea = Template.bind({})
textArea.args = {
  label: 'Text Area',
  helpText: 'help text',
}

export const textAreaError = Template.bind({})
textAreaError.args = {
  label: 'Text Area',
  helpText: 'help text',
  error: 'Error',
}
