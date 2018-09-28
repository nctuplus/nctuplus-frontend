
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  BACKGROUNDS:{
    POST:{
      SET_STATUS:(state, action) => {
        switch(action.payload){
          case 'start':
            return { ...state, status: FETCHING_STATUS.FETCHING }
            break;
          case 'done':
            return { ...state, status: FETCHING_STATUS.DONE }
            break;
          case 'reset':
            return { ...state, status: FETCHING_STATUS.IDLE }
            break;
          default:
            console.log('Unknown payload');
            break;
        }
      }
    }
  }
}, initialState)
