import React, { FC } from 'react'
import TopMenu from './base-components/TopMenu'

const App: FC = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <TopMenu />
      {children}
    </div>
  )
}

export default App
