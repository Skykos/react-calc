import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

let numers = [1,2,3,4,5,6,7,8,9,0]

const renderButtons = ({onClickNumber})=>{
    return(numers.map(number => <Button key={number} text={number.toString()} clickHandler ={onClickNumber}></Button>))
   
            
}

const Numbers = ({onClickNumber}) => {
    return(
        <div className="numbers">
            {renderButtons(onClickNumber)}
            
        </div>
    )
}

Numbers.propTypes  = {
    onClickNumber : PropTypes.func.isRequired
}

export default Numbers;