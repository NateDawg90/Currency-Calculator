const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'SWITCH_CURRENCY':
      return [ action.rates,
               action.baseCurrency
             ];
    default:
      return state;
  }
};


export default reducer;
