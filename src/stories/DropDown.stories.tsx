import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import DropDown, { DropDownProps } from '../base-components/DropDown'

export default {
  title: 'Clickables',
  component: DropDown,
} as Meta

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />

export const dropDown = Template.bind({})
dropDown.args = {
  open: true,
  items: [
    { title: 'Hehehe', onClick: () => console.log('Clicked') },
    { title: 'Hohoho', onClick: () => console.log('Clicked') },
  ],
  onClose: () => console.log('Closed'),
}
