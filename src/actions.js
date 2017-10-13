import C from './constants';

export const addDay = (resort, date, powder=false, backcountry=false) => {
    // App logic
    return {
        type: C.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    }
}

export const removeDay = (day) => {
    return {
        type: C.REMOVE_DAY,
        payload: day
    }
}

export const setGoal = (goal) => {
    return {
        type: C.SET_GOAL,
        payload: goal
    }
}

export const addError = (error) => {
    return {
        type: C.ADD_ERROR,
        payload: error
    }
}

export const clearError = (index) => {
    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}

export const changeSuggestions = (suggestions) => {
    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export const clearSuggestions = () => {
    return {
        type: C.CLEAR_SUGGESTIONS
    }
}

export const randomGoals = () => {
    return (dispatch, getState) => {
        if (!getState().resortNames.fetching) {
            dispatch({
                type: C.FETCH_RESORT_NAMES
            });
    
            setTimeout(() => {
                dispatch({
                    type: C.CANCEL_FETCHING
                })
            }, 1500)
        }
    };
};