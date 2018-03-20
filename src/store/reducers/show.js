import { get } from 'lodash'

const INIT_STATE = {
  title: null,
  subtitle: null,
  description: null,
  cover: null
}

const show = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        title: get(action.payload, ['title'], null),
        subtitle: get(action.payload, ['subtitle'], null),
        description: get(action.payload, ['description'], null),
        cover: get(action.payload, ['cover'], null)
      }
    default:
      return state
  }
}

export {
  show
}
