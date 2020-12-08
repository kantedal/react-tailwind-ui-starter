import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import FormHeader, { FormHeaderProps } from '../base-components/FormHeader'

export default {
  title: 'Form components',
  component: FormHeader,
} as Meta

const Template: Story<FormHeaderProps> = (args) => <FormHeader {...args} />

export const formHeader = Template.bind({})
formHeader.args = {
  title: 'Form Header',
  description: 'A form header',
}
