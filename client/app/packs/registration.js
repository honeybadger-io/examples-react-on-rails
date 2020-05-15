import ReactOnRails from 'react-on-rails'

import BrowserRouterApp from '../BrowserRouterApp'
import ServerRouterApp from '../ServerRouterApp'

const RouterApp = (typeof(window) === 'undefined' ? ServerRouterApp : BrowserRouterApp)

ReactOnRails.register({
  RouterApp,
})