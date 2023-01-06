const defaultMenuState = { open: false };

function menuReducer(state = defaultMenuState, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return action.payload;
      break;

    case "CLOSE_MENU":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
}

export default menuReducer;
