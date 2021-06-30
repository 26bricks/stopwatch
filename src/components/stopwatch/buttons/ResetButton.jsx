import { useDispatch } from 'react-redux'
import { reset_timer } from '../../../store/stopwatch/actions'

const ResetButton = () => {
    const dispatch = useDispatch()

    return (
        <button className='button-medium' onClick={() => dispatch(reset_timer())}>
            Reset
        </button>
    )
}

export default ResetButton