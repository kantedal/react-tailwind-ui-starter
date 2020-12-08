import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import TopMenu, { TopMenuProps } from '../baseComponents/TopMenu'
import SeetingsRoute from '../routes/SettingsRoute'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export default {
  title: 'Example/TopMenu',
  component: TopMenu,
} as Meta

const history = createBrowserHistory()

const Template: Story<TopMenuProps> = (args) => (
  <Router history={history}>
    <TopMenu {...args} />
    {/* <SeetingsRoute history={history} {...args} /> */}
  </Router>
)

export const topMenu = Template.bind({})
topMenu.args = {}
