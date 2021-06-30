import { TOGGLE_TIMER } from './constants'
import { RESET_TIMER } from './constants'
import { UPDATE_TIMER } from './constants'
import { UPDATE_CLOCK } from './constants'
import { LOG } from './constants'
import { UPDATE_LOG_ITEM } from './constants'
import { CLEAR } from './constants'

export const toggle_timer = () => {
  return ({
    type: TOGGLE_TIMER
  })
}

export const reset_timer = () => {
  return ({
    type: RESET_TIMER
  })
}

export const update_timer = (deltaTime) => {
  return {
    type: UPDATE_TIMER,
    payload: { deltaTime }
  }
}

export const update_clock = () => {
  return ({
    type: UPDATE_CLOCK
  })
}

export const log = () => {
  return ({
    type: LOG
  })
}

export const updateLogItem = (payload) => {
  return ({
    type: UPDATE_LOG_ITEM,
    payload: payload
  })
}

export const clearLog = () => {
  return ({
    type: CLEAR
  })
}
