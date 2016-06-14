import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, Redirect, browserHistory} from 'react-router'

class App extends Component {
    render(){
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class About extends Component {
    render(){
        return (
            <h1>about me</h1>
        )
    }
}

class Inbox extends Component {
    render(){
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || 'welcome !'}
            </div>
        )
    }
}



class Message extends Component {
    render(){
        return (
            <div>
                <h3>Message: {this.props.params.id}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Redirect from="messages/:id" to="/messages/:id" />
            </Route>
            <Route component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>,

    document.querySelector('#container')
)
















