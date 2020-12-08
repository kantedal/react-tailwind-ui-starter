import React from 'react'
import '../tailwind.output.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Table, { TableProps } from '../base-components/Table'

export default {
  title: 'Table',
  component: Table,
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args} />

export const table = Template.bind({})
table.args = {
  columnLabels: [
    { id: 'name', label: 'NAME' },
    { id: 'title', label: 'TITLE' },
    { id: 'email', label: 'EMAIL' },
    { id: 'role', label: 'ROLE' },
  ],
  tableRows: [
    [
      { content: 'Maxton Deyren', bold: true },
      { content: 'International business partner' },
      { content: 'maxton.deyren@example.com' },
      { content: 'Admin' },
    ],
    [
      { content: 'Jane Cooper', bold: true },
      { content: 'Regional Paradigm Technician' },
      { content: 'jane.cooper@example.com' },
      { content: 'Editor' },
    ],
  ],
}
