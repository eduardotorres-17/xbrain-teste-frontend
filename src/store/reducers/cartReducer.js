const initialState = {
  items: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CART':
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
      };
    default:
      return state;
  }
}