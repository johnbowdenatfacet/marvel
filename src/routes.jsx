import React from 'react'
import {Route, Switch} from 'react-router-dom'

import MasterDetail from './master/MasterDetail'

export default function Routes (props) {
  return (
    <Switch>
      <Route exact path='/' component={MasterDetail} />
      <Route exact path='/character/:id' component={MasterDetail} />
      <Route nomatch component={() => <div>404</div>} />
    </Switch>
  )
}
