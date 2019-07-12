import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "../actions/actionTypes";

const initialState = {
    activity: "napping"
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NAP: {
            return {
                //spread operator creates a new state object
                // everytime and changes the value of what activity is
                ...state,
                activity: "eating"
            };
        }
        case ACTION_EAT: {
            return {
                ...state,
                activity: "napping"
            };
        }
        case ACTION_PLAY: {
            return {
                ...state,
                activity: "playing"
            };
        }
        default: {
            return state;
        }
    }
};

export default activityReducer;
