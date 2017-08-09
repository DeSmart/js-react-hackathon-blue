import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import Router from './router'
import UsersListView from './UsersListView'
import WelcomeView from './WelcomeView'
import Members from './List'

class App extends Component {
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/MemberList' exact component={Members}/>
            <Route path='/users' exact component={UsersListView}/>
            <Route path='/' exact component={WelcomeView}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
