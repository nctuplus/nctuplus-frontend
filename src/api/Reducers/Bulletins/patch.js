
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  BULLETINS:{
    PATCH:{
      SET_STATUS:(state, action) => ({ ...state, status: action.payload })
    },
  }
}, initialState)
