import FormItem from 'base-components/FormItem'
import Input from 'base-components/Input'
import PageLayout from 'base-components/PageLayout'
import RadioButton from 'base-components/RadioButton'
import SelectMenu, { SelectMenuItem } from 'base-components/SelectMenu'
import Toggle from 'base-components/Toggle'
import React, { FC, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps<void> {}

const SettingsRoute: FC<Props> = (props) => {
  const [toggled, setToggled] = useState(true)

  const selectItems = useMemo<SelectMenuItem[]>(
    () => [
      { id: 'goteborg', title: 'Göteborg' },
      { id: 'stockholm', title: 'Stockholm' },
      { id: 'malmo', title: 'Malmö' },
      { id: 'uppsala', title: 'Uppsala' },
      { id: 'linkoping', title: 'Linköping' },
      { id: 'norrkoping', title: 'Norrköping' },
      { id: 'lund', title: 'Lund' },
      { id: 'skovde', title: 'Skövde' },
      { id: 'umea', title: 'Umeå' },
      { id: 'lulea', title: 'Luleå' },
      { id: 'karlstad', title: 'Karlstad' },
    ],
    []
  )

  const [selectedItem, setSeletedItem] = useState<SelectMenuItem | null>(null)
  const [radioValue, setRadioValue] = useState('1')

  // const { addToast } = useToasts()

  return (
    <PageLayout title='Settings'>
      <FormItem title='Username'>
        <Input placeholder='Username...' />
      </FormItem>
      <FormItem title='Email'>
        <Input placeholder='Email...' />
      </FormItem>
      <FormItem title='Notifications'>
        <Toggle toggled={toggled} onChange={setToggled} />
      </FormItem>
      <FormItem title='Notification types'>
        <fieldset>
          <RadioButton
            onClick={(e) => setRadioValue(e.currentTarget.id)}
            id='1'
            checked={radioValue === '1'}
            label='Comments'
            description='Get notified when a candidate accepts or rejects an offer.'
          />
          <RadioButton
            onClick={(e) => setRadioValue(e.currentTarget.id)}
            id='2'
            checked={radioValue === '2'}
            label='Candidates'
            description='Get notified when a candidate applies for a job.'
          />
          <RadioButton
            onClick={(e) => setRadioValue(e.currentTarget.id)}
            id='3'
            checked={radioValue === '3'}
            label='Offers'
            description='Get notified when a candidate accepts or rejects an offer.'
          />
        </fieldset>
      </FormItem>
      <FormItem title='Location'>
        <SelectMenu selectedItem={selectedItem} onChange={setSeletedItem} items={selectItems} placeholder='Select location...' />
      </FormItem>
    </PageLayout>
  )
}

export default SettingsRoute
