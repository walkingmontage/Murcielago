import React, {Component, PropTypes} from 'react'

class Link extends Component{
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {active, children, onClick} = this.props;
        if(active){
            return (<span>{children}</span>)
        }
        return (
            <a href="#"
               onClick={(e => {
                e.preventDefault()
                onClick()
            })}
            >
                {children}
            </a>
        )
    }
}


////这一段和上面的写法等价的,
////React-redux的connect()(App),
////在connect源码里,App最终是传给React.createElement(App),可接受的参数类型:
////It should be a string (for DOM elements) or a ReactClass

//const Link = ({active, children, onClick}) => {
//第一个参数其实是 this.props
//    if(active){
//        return (<span>{children}</span>)
//    }
//
//    return (
//        <a href="#"
//            onClick={(e => {
//                e.preventDefault()
//                onClick()
//            })}
//        >
//        {children}
//        </a>
//    )
//}
//
//Link.propTypes = {
//    active: PropTypes.bool.isRequired,
//    children: PropTypes.node.isRequired,
//    onClick: PropTypes.func.isRequired
//}

export default Link
