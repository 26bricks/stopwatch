import { useSelector } from 'react-redux'

const TimerValue = () => {
    const timer = useSelector((state) => state.stopwatch.formatedTimer)
    const timerLabel = useSelector((state) => state.stopwatch.timerLabel)
    const isRunning = useSelector((state) => state.stopwatch.isRunning)

    return (
        <div className='value-box'>
            {
                isRunning ? (
                    <div className='value-large-started'>{timer}</div>
                ) : (
                    <div className='value-large-stopped'>{timer}</div>
                )
            }
            <div style={{textAlign: 'center'}}>{timerLabel}</div>
        </div>
    )
}

export default TimerValue
