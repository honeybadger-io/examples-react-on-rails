import React from 'react'
import { StaticRouter } from 'react-router-dom'

import App from './App'

export default (_props, railsContext) => {
  let error
  let redirectLocation
  const { location } = railsContext

  // This tell react_on_rails to skip server rendering any HTML. Note, client rendering
  // will handle the redirect. What's key is that we don't try to render.
  // Critical to return the Object properties to match this { error, redirectLocation }
  if (error || redirectLocation) {
    return { error, redirectLocation }
  }

  // Allows components to add properties to the object to store
  // information about the render.
  const context = {}

  return(
    <StaticRouter
    location={location}
    context={context}
    >
      <App />
    </StaticRouter>
  )
}