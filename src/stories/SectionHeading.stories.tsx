import React from 'react'
import 'styles/main.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import SectionHeading, { SectionHeadingProps } from '../base-components/SectionHeading'

export default {
  title: 'SectionHeading',
  component: SectionHeading,
} as Meta

const Template: Story<SectionHeadingProps> = (args) => <SectionHeading {...args} />

export const sectionHeading = Template.bind({})
sectionHeading.args = {
  title: 'Section Heading',
  description: 'A Section heading',
}
