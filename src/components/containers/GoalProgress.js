import { connect } from 'react-redux';
import GoalProgress from '../ui/GoalProgress';
import { setGoal } from '../../actions'

const mapStateToProps = (state) => {
    return {
        current: state.allSkiDays.length,
        goal: state.goal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewGoal(goal) {
            dispatch(
                setGoal(goal)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress)
