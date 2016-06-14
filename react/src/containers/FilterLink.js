import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

//将ownProps的属性加入到props
//ownProps 为FilterLink的默认props 见Footer.js


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

//加入active 和 onClick 到props
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink
