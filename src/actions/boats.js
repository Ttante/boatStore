export const updateBoatPrice = () => dispatch => {
    dispatch({
        type: 'UPDATE_BOAT_PRICE',
        payload: 'updated boat price!'
    })
}