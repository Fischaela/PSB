import test from 'ava'
import { toggleModal } from './modal'

test(`toggleModalAction: creates the TOGGLE_MODAL action`, t => {
  t.deepEqual(toggleModal('settings'), {
    type: 'TOGGLE_MODAL'
  })
})
