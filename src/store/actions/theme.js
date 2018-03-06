const init = theme => ({
  type: 'INIT',
  payload: theme
})

const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme
})

export {
  init,
  setTheme
}
