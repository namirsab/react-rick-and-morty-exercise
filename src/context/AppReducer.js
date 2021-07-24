export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_CHAR_TO_FAVOURITES":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };
    default:
      return state;
  }
}
