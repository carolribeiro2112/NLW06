import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/rooms/new' component={NewRoom}/>
    </Switch>
  )
}

