const INITIAL = {
  open: false,
  panel: 0
}

const modal = (state = INITIAL, action) => {
  let modal

  switch (action.type) {
    case 'OPEN_MODAL':
      console.log('Open', action, state)
      return {
        open: true,
        panel: 0
      }

    case 'CLOSE_MODAL':
      console.log('Close', action, state)
      return INITIAL

    case 'PANEL_PODCAST':
      return {
        open: true,
        panel: 0
      }

    case 'PANEL_CLIENTS':
      return {
        open: true,
        panel: 1
      }

    case 'PANEL_FINISH':
      return {
        open: true,
        panel: 2
      }

    default:
      return state
  }
}

export {
  modal
}
