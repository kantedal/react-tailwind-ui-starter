// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import FormHeader from 'base-components/FormHeader'
import FormItem from 'base-components/FormItem'
import Input from 'base-components/Input'
import TextArea from 'base-components/TextArea'
import React from 'react'
import 'styles/main.css'
import { ButtonProps } from '../base-components/Button'

export default {
  title: 'Example/Form',
  component: FormItem,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <div className='max-w-5xl'>
    <FormHeader title='Profile' description='This information will be displayed publicly so be careful what you share.' />
    <FormItem title='Username'>
      <Input placeholder='Username...' />
    </FormItem>
    <FormItem title='Firstname'>
      <Input placeholder='Firstname...' />
    </FormItem>
    <FormItem title='Lastname'>
      <Input placeholder='Lastname...' />
    </FormItem>
    <FormItem title='About'>
      <TextArea placeholder='About...' aria-rowcount={5} helpText='Write a few sentences about yourself.' />
    </FormItem>
  </div>
)

export const SimpleForm = Template.bind({})
SimpleForm.args = {}
