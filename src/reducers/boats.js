const initState = {
  result: '',
  mainBoat: {
    name: 'S.S. Buttface',
    type: 'Tour Boat',
    size: '50 foot',
    price: 20000
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_MAINBOAT_PRICE':
      return {
        ...state,
        mainBoat: {
          ...state.mainBoat,
          price: action.payload
        }
      }
    default:
      return state
  }
}