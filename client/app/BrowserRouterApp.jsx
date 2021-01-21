import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

export default (props, _railsContext) => {
  if (typeof(window) === 'undefined') {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  } else {
    const Honeybadger = require('@honeybadger-io/js')
    const ErrorBoundary = require('@honeybadger-io/react').default

    const config = {
      apiKey: process.env.HONEYBADGER_API_KEY,
      environment: process.env.NODE_ENV || 'development',
      revision: process.env.HONEYBADGER_REVISION,
      reportData: true
    }

    Honeybadger.configure(config);

    // For debugging only
    window.Honeybadger = Honeybadger

    return (
      <BrowserRouter>
        <ErrorBoundary honeybadger={Honeybadger}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    )
  }
}