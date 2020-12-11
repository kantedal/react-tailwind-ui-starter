import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import ButtonGroup, { ButtonGroupProps } from '../base-components/ButtonGroup'

export default {
  title: 'Clickables',
  component: ButtonGroup,
} as Meta

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />

export const buttonGroup = Template.bind({})
buttonGroup.args = {
  variant: 'primary',
  size: 'base',
  buttonItems: [{ text: 'Years' }, { text: 'Months' }, { text: 'Days' }],
}
