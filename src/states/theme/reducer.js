/* eslint-disable default-param-last */
import { ActionType } from './action';

function themeReducer(darkTheme = false, action) {
  switch (action.type) {
    case ActionType.TOGGLE_DARKTHEME:
      return !darkTheme;
    default:
      return darkTheme;
  }
}

export default themeReducer;
