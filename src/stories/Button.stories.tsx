// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import 'styles/main.css'
import Button, { ButtonProps } from '../base-components/Button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <div className=''>
    <Button {...args} size='xs'>
      Button
    </Button>
    <div className='h-4' />
    <Button {...args} size='sm'>
      Button
    </Button>
    <div className='h-4' />
    <Button {...args} size='base'>
      Button
    </Button>
    <div className='h-4' />
    <Button {...args} size='lg'>
      Button
    </Button>
    <div className='h-4' />
    <Button {...args} size='xl'>
      Button
    </Button>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}
