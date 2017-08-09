import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import Router from './router'
import Member from './List'
import store from '../store'
import LeaderBoard from './LeaderBoard'
import Newuser from './Newuser'
class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/' exact component={Member}/>
            <Route path='/leaderboard' component={LeaderBoard}/>
            <Route path='/newuser' component={Newuser}/>

          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
