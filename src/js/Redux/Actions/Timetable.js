
import { createAction } from 'redux-actions'

export const timetableSelectNewCell = createAction('TIMETABLE_SELECT_NEW_CELL')
export const timetableUnselectCell = createAction('TIMETABLE_UNSELECT_CELL')
export const timetableSetHovering = createAction('TIMETABLE_SET_HOVERING')
export const timetableAdjustRow = createAction('TIMETABLE_ADJUST_ROW')
export const timetableShareToggle = createAction('TIMETABLE_SHARE_TOGGLE')
