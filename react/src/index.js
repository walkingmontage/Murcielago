import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Lessons from 'Lessons'

class Mengmeng extends Component {
    render(){
        return (
            <div>
                <h1>Miss</h1>
                <Lessons />
            </div>
        )
    }
}

ReactDOM.render(
    <Mengmeng />,
    document.querySelector('#container')
)
