import { useDispatch } from 'react-redux'
import { clearLog } from '../../../store/stopwatch/actions'

const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button className='button-small' onClick={() => dispatch(clearLog())}>Clear</button>
    )
}

export default ClearButton