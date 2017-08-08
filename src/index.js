import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/createStore'

const store = createStore({foo: 'bar'})

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
