import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import TopMenu, { TopMenuProps } from '../base-components/TopMenu'
import { Router } from 'react-router-dom'

export default {
  title: 'TopMenu',
  component: TopMenu,
} as Meta

// const Template: Story<TopMenuProps> = (args) => <TopMenu {...args} />

// export const topMenu = Template.bind({})
// topMenu.args = {}
