import StartPauseButton from './buttons/StartPauseButton'
import LogButton from './buttons/LogButton'
import ResetButton from './buttons/ResetButton'
import ClearButton from './buttons/ClearButton'

const ButtonPanel = () => {
    return (
        <div>
            <StartPauseButton />
            <LogButton />
            <ResetButton />
            <ClearButton />
        </div>
    )
}

export default ButtonPanel