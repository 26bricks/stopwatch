import { useSelector } from 'react-redux'

const TimeValue = () => {
    const time = useSelector((state) => state.stopwatch.formatedTime)
    const timeLabel = useSelector((state) => state.stopwatch.timeLabel)

    return (
        <div className='value-box'>
            <div className='value-large'>{time}</div>
            <div className='value-label'>{timeLabel}</div>
        </div>
    )
}

export default TimeValue