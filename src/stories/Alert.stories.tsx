import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Alert, { AlertProps } from '../base-components/Alert'

export default {
  title: 'Notification',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args}>Alert</Alert>

export const alert = Template.bind({})
alert.args = {
  variant: 'success',
}
