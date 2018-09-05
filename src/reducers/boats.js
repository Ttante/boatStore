export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_BOAT_PRICE':
            return {
                result: action.payload
            }
        default:
            return state
    }
}