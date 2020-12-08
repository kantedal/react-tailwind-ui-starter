import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import PageLayout, { PageLayoutProps } from '../base-components/PageLayout'

export default {
  title: 'PageLayout',
  component: PageLayout,
} as Meta

const Template: Story<PageLayoutProps> = (args) => <PageLayout {...args} />

export const pageLayout = Template.bind({})
pageLayout.args = {
  title: 'Page layout',
}
