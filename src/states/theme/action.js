const ActionType = {
  TOGGLE_DARKTHEME: 'TOGGLE_DARKTHEME',
};

function toggleDarkTheme() {
  return {
    type: ActionType.TOGGLE_DARKTHEME,
  };
}

function toggleDarkThemeThunk() {
  return (dispatch, getState) => {
    dispatch(toggleDarkTheme());
    const { darkTheme } = getState();
    localStorage.setItem('theme', JSON.stringify(darkTheme));
  };
}

export { ActionType, toggleDarkTheme, toggleDarkThemeThunk };
