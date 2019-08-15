import React from "react";
import { Route, Switch } from "react-router-dom";

import PetIndex from "./pets/index";
import PetShow from "./pets/show";
import PetNew from "./pets/new";
import PetEdit from "./pets/edit";
import PetDestroy from "./pets/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PetIndex} />
      <Route exact path="/pets/new" component={PetNew} />
      <Route exact path="/pets/:id" component={PetShow} />
      <Route exact path="/pets/:id/edit" component={PetEdit} />
      <Route exact path="/pets/:id/destroy" component={PetDestroy} />
    </Switch>
  );
}

export default Routes;