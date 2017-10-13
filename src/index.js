import storeFactory from './store';
import { addDay, removeDay, setGoal, addError, randomGoals} from './actions'


const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};



const saveState = () => {
	const state = JSON.stringify(store.getState());
	localStorage['redux-store'] = state;
}

const store = storeFactory(initialState)

store.subscribe(saveState);

store.dispatch(
	addDay("Mt Shasta", "2016-10-28", true, true)
);

store.dispatch(
	addDay("Squaw valley", "2016-3-28", true, false)
);

store.dispatch(
	addDay("The Canyons", "2016-1-2", false, true)
);

store.dispatch(
	removeDay("2016-3-28")
);

store.dispatch(
	setGoal(40)
);

store.dispatch(
	randomGoals()
);