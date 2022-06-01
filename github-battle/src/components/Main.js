import React from 'react'
import { Switch  ,  Route } from 'react-router-dom'
import Popular from './Popular'
import UserBattle from './UserBattle'
export default function Main() {
  return (
      <Switch>
          <Route path="/"  exact component={Popular}/>
          <Route path="/battle" component={UserBattle}/>
      </Switch>
  )
}
