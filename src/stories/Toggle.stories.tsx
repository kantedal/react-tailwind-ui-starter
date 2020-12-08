import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Toggle, { ToggleProps } from '../base-components/Toggle'

export default {
  title: 'Clickables',
  component: Toggle,
} as Meta

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />

export const toggle = Template.bind({})
toggle.args = {
  toggled: true,
  onChange: (toggled) => console.log(toggled),
}
