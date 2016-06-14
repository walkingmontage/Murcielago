import React, {Component} from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

//通过 react-redux 提供的 connect() 方法将包装好的组件连接到Redux。
// 尽量只做一个顶层的组件，或者 route 处理。从技术上来说你可以将应用中的任何一个组件 connect() 到 Redux store 中，
// 但尽量避免这么做，因为这个数据流很难追踪。

//此处connect了3个组件 - -!
export default App
