import React from "react";
import { Switch, Route } from "react-router-dom";
import Popular from "./Popular";
import UserBattle from "./UserBattle";
import BattleResult from "./BattleResult";
export default function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Popular} />
      <Route path="/battle" exact>
        <UserBattle />
      </Route>
      <Route path="/battle/results" component={BattleResult} />
    </Switch>
  );
}
