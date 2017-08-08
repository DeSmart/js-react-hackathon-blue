import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import Router from './router'
import UsersListView from './Users/UsersListView'
import WelcomeView from './Welcome/WelcomeView'

class App extends Component {
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/users' exact component={UsersListView}/>
            <Route path='/' exact component={WelcomeView}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
