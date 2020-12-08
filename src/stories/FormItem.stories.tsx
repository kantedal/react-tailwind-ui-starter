import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import FormItem, { FormItemProps } from '../baseComponents/FormItem'

export default {
  title: 'Form components',
  component: FormItem,
} as Meta

const Template: Story<FormItemProps> = (args) => <FormItem {...args} />

export const formItem = Template.bind({})
formItem.args = {
  title: 'Form item',
  description: 'A form item',
}
