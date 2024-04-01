export const increment = () => ({
    type: 'INCREMENT'
});

export const reset = () => ({
    type: 'RESET'
});

export const setMin = (value: number) => ({
    type: 'SET_MIN',
    payload: value
});

export const setMax = (value: number) => ({
    type: 'SET_MAX',
    payload: value
});
