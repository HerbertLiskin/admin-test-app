import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Root, User } from './containers'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/user/:id" component={User} />
    </Switch>
)

export default Routes
