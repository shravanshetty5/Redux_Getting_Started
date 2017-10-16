import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import AddDayForm from '../ui/AddDayForm';
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) => {
    return {
        suggestions: state.resortNames.suggestions,
        fetching: state.resortNames.fetching,
        router: props.router,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNewDay(day) {
            dispatch(
                addDay(...day)
            )
        },
        onChange(value) {
            if (value) {
                dispatch(
                    suggestResortNames(value)
                )
            } else {
                dispatch(
                    clearSuggestions()
                )
            }
        },
        onClear() {
            dispatch(
                clearSuggestions()
            )
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDayForm))