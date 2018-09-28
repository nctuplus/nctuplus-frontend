
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}


export default handleActions({
  BACKGROUNDS:{
    FETCH:{
      SET_STATUS:(state, action) => {
        switch(action.payload){
          case 'start':
            return { ...state, status: FETCHING_STATUS.FETCHING }
            break;
          case 'done':
            return { ...state, status: FETCHING_STATUS.DONE }
            break;
          default:
            console.log('Unknown payload');
            break;
        }
      }
    },
    UPDATE:(state, action) => ({ ...state, data: action.payload })
  }
}, initialState)
