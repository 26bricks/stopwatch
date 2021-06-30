import { useSelector, useDispatch } from 'react-redux'
import { updateLogItem } from '../../store/stopwatch/actions'

const LogPanel = () => {
    const log = useSelector((state) => state.stopwatch.log)
    const dispatch = useDispatch()
    const actionLabel = useSelector((state) => state.stopwatch.actionLabel)
    const timerLabel = useSelector((state) => state.stopwatch.timerLabel)
    const timeLabel = useSelector((state) => state.stopwatch.timeLabel)
    const noteLabel = useSelector((state) => state.stopwatch.noteLabel)

    const logItems = log.map((item, i) => {
        return (
            <tr key={`timer-${i}`}>
                <td>{item.action}</td>
                <td>{item.timer}</td>
                <td>{item.time}</td>

                <td><input
                    type='text'
                    value={item.note}
                    onChange={(e) => dispatch(updateLogItem({ id: item.id, note: e.target.value }))}
                    className='log-input' />
                </td>
            </tr>
        )
    })

    return (
        log.length > 0 ?
            <table>
                <thead>
                    <tr>
                        <th>{actionLabel}</th>
                        <th>{timerLabel}</th>
                        <th>{timeLabel}</th>
                        <th>{noteLabel}</th>
                    </tr>
                </thead>
                <tbody>
                    {logItems}
                </tbody>
            </table>
            :
            null
    )
}

export default LogPanel