interface State {
    count: number;
    min: number;
    max: number;
}

const initialState: State = {
    count: 0,
    min: 0,
    max: 10
};

const rootReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            if (state.count >= state.max) {
                return state;
            }
            return {
                ...state,
                count: state.count + 1
            };
        case 'RESET':
            return {
                ...state,
                count: state.min
            };
        case 'SET_MIN':
            return {
                ...state,
                min: action.payload
            };
        case 'SET_MAX':
            return {
                ...state,
                max: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;