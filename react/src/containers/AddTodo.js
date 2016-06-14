import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

//什么都不传的时候只返回dispatch
//见 https://github.com/reactjs/react-redux/blob/master/docs/api.md#api
let AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()

                if(!input.value.trim()){
                    return
                }

                //通过actions返回新的state,然后通过dispatch更新state,然后重新render页面
                dispatch(addTodo(input.value))
                input.value = ''
            }}>

                <input type="text" ref={node => {input = node}} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}


AddTodo = connect()(AddTodo)

export default AddTodo
