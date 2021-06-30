import { useDispatch } from 'react-redux'
import { log } from '../../../store/stopwatch/actions'

const LogButton = () => {
    const dispatch = useDispatch()

    return (
        <button className='button-medium' onClick={() => dispatch(log())}>
            Log
        </button>
    )
}

export default LogButton