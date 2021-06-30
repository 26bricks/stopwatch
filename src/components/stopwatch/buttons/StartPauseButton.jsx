import { useDispatch, useSelector } from 'react-redux'
import { toggle_timer } from '../../../store/stopwatch/actions'

const StartPauseButton = () => {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.stopwatch.isRunning)

    return isRunning ? (
        <button className='button-pause' onClick={() => dispatch(toggle_timer())}>
            Pause
        </button>
    ) : (
        <button className='button-start' onClick={() => dispatch(toggle_timer())}>
            Start
        </button>
    )
}

export default StartPauseButton