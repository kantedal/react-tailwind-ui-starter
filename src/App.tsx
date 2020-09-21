import { Snackbar } from '@material-ui/core'
import React from 'react'
import Alert from './base-components/Alert'
import TopMenu from './base-components/TopMenu'

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <TopMenu />
      <Snackbar open={true}>
        <Alert variant='success' />
      </Snackbar>
    </div>
  )
}

export default App
