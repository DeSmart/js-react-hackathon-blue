export default prefix => {
    const initialState = {
        data: null,
        fetching: false,
        error: null
    }

    return (state = initialState, action) => {
        console.log(action)
        switch (action.type) {
            case `members/FETCH__BEGIN`:
                return {
                    ...state,
                    fetching: true
                }
            case `members/FETCH__SUCCESS`:
                return {
                    ...state,
                    fetching: false,
                    data: action.data.data,
                    error: null
                }
            case `members/FETCH__FAIL`:
                return {
                    ...state,
                    fetching: false,
                    error: action.error
                }
            default:
                return state
        }
    }
}