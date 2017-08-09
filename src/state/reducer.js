import memberFetching from './parts/list'


export default (state = {}, action) => {
    return {
        memberFetching: memberFetching(state.memberFetching, action),
    }
}