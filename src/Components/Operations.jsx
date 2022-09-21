import Button from './Button'
import PropTypes from 'prop-types'

const Operations = ({onClickOperation,onClickEqual}) => {
    return (
        <div className="math-operations">
            <Button text={'+'} clickHandler = {onClickOperation}></Button>
            <Button text={'-'} clickHandler = {onClickOperation}></Button>
            <Button text={'*'} clickHandler = {onClickOperation}></Button>
            <Button text={'/'} clickHandler = {onClickOperation}></Button>
            <Button text={'='} clickHandler={onClickEqual}></Button>
        </div>

        
    )
}

Operations.propTypes = {
    onClickOperation  : PropTypes.func.isRequired,
    onClickEqual : PropTypes.func.isRequired
}

export default Operations;