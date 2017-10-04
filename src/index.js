import C from './constants';
import { allSkiDays } from './store/reducers';

const state = [{
    "resort": "Kirkwood",
    "date": "2016-12-7",
    "powder": true,
    "backcountry": false
}, {
    "resort": "Squaw Valley",
    "date": "2016-12-8",
    "powder": false,
    "backcountry": false
}];

const action = {
    type: C.REMOVE_DAY,
    payload: "2016-12-7"
}

const nextState = allSkiDays(state, action);

console.log(`
    initial goal: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`)