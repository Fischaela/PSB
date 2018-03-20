const openModal = () => ({
  type: 'OPEN_MODAL'
})

const closeModal = () => ({
  type: 'CLOSE_MODAL'
})

const panelPodcast = () => ({
  type: 'PANEL_PODCAST'
})

const panelClients = () => ({
  type: 'PANEL_CLIENTS'
})

const panelFinish = () => ({
  type: 'PANEL_FINISH'
})

export {
  openModal,
  closeModal,
  panelPodcast,
  panelClients,
  panelFinish
}
