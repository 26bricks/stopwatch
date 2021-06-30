import TimerValue from './values/TimerValue'
import TimeValue from './values/TimeValue'

const ValuePanel = () => {
    return (
        <div className='value-panel'>
            <TimerValue />
            <TimeValue />
        </div>
    )
}

export default ValuePanel
