import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import Router from './router'
import Member from './List'
import store from '../store'
class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/MemberList' exact component={Member}/>
            <Route path='/' exact component={Member}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
