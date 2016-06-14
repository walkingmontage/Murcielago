import React, {Component, PropTypes} from 'react'

class Todo extends Component{

    //ES6静态属性写法
    //参见: https://babeljs.io/blog/2015/06/07/react-on-es6-plus

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }

    render (){
        const {onClick, completed, text} = this.props;

        return (
            <li onClick={onClick}
                style={{
                textDecoration: completed ? 'line-through': 'none'
            }}>
                {text}
            </li>
        )
    }
}

export default Todo
