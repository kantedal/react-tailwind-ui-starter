import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import SelectMenu, { SelectMenuProps, SelectMenuItem } from '../base-components/SelectMenu'

export default {
  title: 'SelectMenu',
  component: SelectMenu,
} as Meta

const Template: Story<SelectMenuProps> = (args) => <SelectMenu {...args} />

export const selectMenu = Template.bind({})
selectMenu.args = {
  selectedItem: { id: 'first', title: 'First' },
  items: [
    { id: 'first', title: 'First' },
    { id: 'second', title: 'Second' },
  ],
  placeholder: 'Items',
  label: 'A select menu',
  onChange: (item) => console.log(item),
}
