import { Snackbar } from '@material-ui/core'
import FormHeader from 'base-components/FormHeader'
import FormItem from 'base-components/FormItem'
import Input from 'base-components/Input'
import PageLayout from 'base-components/PageLayout'
import SelectMenu, { SelectMenuItem } from 'base-components/SelectMenu'
import Toggle from 'base-components/Toggle'
import React, { useMemo, useState } from 'react'
import Alert from './base-components/Alert'
import TopMenu from './base-components/TopMenu'

function App() {
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

  return (
    <div className='min-h-screen bg-gray-100'>
      <TopMenu />
      <PageLayout>
        <FormHeader title='Form' description='This information will be displayed publicly so be careful what you share.' />
        <FormItem title='Username'>
          <Input placeholder='Username...' />
        </FormItem>
        <FormItem title='Email'>
          <Input placeholder='Email...' />
        </FormItem>
        <FormItem title='Notifications'>
          <Toggle toggled={toggled} onChange={setToggled} />
        </FormItem>
        <FormItem title='Location'>
          <SelectMenu selectedItem={selectedItem} onChange={setSeletedItem} items={selectItems} placeholder='Select location...' />
        </FormItem>
      </PageLayout>
      <Snackbar open={true}>
        <Alert variant='success' />
      </Snackbar>
    </div>
  )
}

export default App
