const INITIAL = {
  open: false
}

const modal = (state = INITIAL, action) => {
  let modal

  switch (action.type) {
    case 'OPEN_MODAL':
      console.log('Open', action, state)
      return {
        open: true
      }

    case 'CLOSE_MODAL':
      console.log('Close', action, state)
      return INITIAL

    default:
      return state
  }
}

export {
  modal
}
