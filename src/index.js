import storeFactory from './store';
import { addDay, removeDay, setGoal, addError, suggestResortNames} from './actions'


const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};



const saveState = () => {
	const state = JSON.stringify(store.getState());
	localStorage['redux-store'] = state;
}

const store = storeFactory(initialState)

store.dispatch(
	suggestResortNames("hea")
);