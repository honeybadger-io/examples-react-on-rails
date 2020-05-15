import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

const Index = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/client/test'>Throw on client</Link></li>
        <li><a href='/server/test' target='_blank'>Throw on server</a></li>
      </ul>
    </nav>
  </div>
)

const ClientTest = () => {
  throw new Error('Client Test')
}

const ServerTest = () => {
  throw new Error('Server Test')
}

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route path='/client/test' component={ClientTest}/>
      <Route path='/server/test' component={ServerTest}/>
    </Switch>
  </main>
)

export default () => (
  <div>
    <Routes />
  </div>
)