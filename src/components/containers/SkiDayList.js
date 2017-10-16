import { connect } from 'react-redux';
import SkiDayList from '../ui/SkiDayList';
import { removeDay } from '../../actions';

const mapStateToProps = (state, props) => {
  return {
    days: state.allSkiDays,
    filter: props.params.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveDay(date) {
      dispatch(
        removeDay(date)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList);
