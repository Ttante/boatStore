export const updateMainBoatPrice = (newPrice) => dispatch => {
    dispatch({
        type: 'UPDATE_MAINBOAT_PRICE',
        payload: newPrice
    })
}