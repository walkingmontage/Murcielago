import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp, {},  window.devToolsExtension ? window.devToolsExtension() : f => f)

console.log('初始化的state为:', store.getState())
store.subscribe(() =>
    console.log('store发生改变:', store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#container')
)
