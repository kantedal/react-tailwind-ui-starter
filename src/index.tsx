import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import DashboardRoute from 'routes/DashboardRoute'
import SettingsRoute from 'routes/SettingsRoute'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <ToastProvider components={{ Toast: MyCustomToast }} placement='bottom-left' autoDismiss> */}
    <Router>
      <App>
        <Route path='/dashboard' component={DashboardRoute} />
        <Route path='/settings' component={SettingsRoute} />
        <Redirect from='/' to='/dashboard' />
      </App>
    </Router>
    {/* </ToastProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
