import { TOGGLE_TIMER } from './constants'
import { RESET_TIMER } from './constants'
import { UPDATE_TIMER } from './constants'
import { LOG } from './constants'
import { CLEAR } from './constants'

import {
    INITIAL_TIMER, ACTION_LABEL, UPDATE_LOG_ITEM, TIMER_LABEL,
    TIME_LABEL, NOTE_LABEL
} from './constants'
import { formatTimeDifference, formatTime } from '../../utils/timeUtils'

const initialState = {
    isRunning: false,
    lastUpdateTime: Date.now(),
    timer: INITIAL_TIMER,
    formatedTimer: formatTimeDifference(INITIAL_TIMER),
    formatedTime: formatTime(new Date()),
    log: [],
    actionLabel: ACTION_LABEL,
    timerLabel: TIMER_LABEL,
    timeLabel: TIME_LABEL,
    noteLabel: NOTE_LABEL
}

const stopwatchReducer = (state = initialState, action) => {

    const log = (action) => {
        const newLog = [...state.log]

        return (
            [{
                id: Date.now(),
                action: action,
                timer: formatTimeDifference(state.timer),
                time: formatTime(new Date()),
                note: action == 'Reset' ? '' : ''  //Prepared for an automatic description
            }].concat(newLog)
        )
    }

    switch (action.type) {

        case TOGGLE_TIMER:
            return {
                ...state, isRunning: !state.isRunning,
                log: state.isRunning ? log('Pause') : log('Start')
            }

        case RESET_TIMER:
            return {
                ...state,
                isRunning: false,
                timer: INITIAL_TIMER,
                formatedTimer: formatTimeDifference(INITIAL_TIMER),
                log: log('Reset')
            }

        case UPDATE_TIMER:
            const now = Date.now()
            const deltaTime = now - state.lastUpdateTime

            return state.isRunning ?
                {
                    ...state,
                    timer: state.timer + deltaTime,
                    formatedTimer: formatTimeDifference(state.timer + deltaTime),
                    formatedTime: formatTime(new Date()),
                    lastUpdateTime: now
                }
                :
                {
                    ...state,
                    formatedTime: formatTime(new Date())
                }

        case LOG:
            return {
                ...state,
                log: log('Log')
            }

        case UPDATE_LOG_ITEM:
            const index = state.log.findIndex(item => item.id === action.payload.id)
            const newLog = [...state.log]
            newLog[index].note = action.payload.note

            return {
                ...state,
                log: newLog
            }

        case CLEAR:
            return {
                ...state,
                isRunning: false,
                timer: INITIAL_TIMER,
                formatedTimer: formatTimeDifference(INITIAL_TIMER),
                log: []
            }

        default:
            return state
    }
}

export default stopwatchReducer