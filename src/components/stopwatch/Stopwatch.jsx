import ButtonPanel from './ButtonPanel'
import ValuePanel from './ValuePanel'
import LogPanel from './LogPanel'

const Stopwatch = () => {
    return (
        <div style={{margin:'0px 0px 10rem 0px'}}>
            <ButtonPanel />
            <ValuePanel />
            <LogPanel />
        </div>
    )
}

export default Stopwatch