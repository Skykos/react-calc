import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({onDelete,onClear}) => {

    return (
        <div className="functions">
            <Button type="button-long-text" text="Borrar" clickHandler = {onDelete}></Button>
            <Button text="&larr;" clickHandler = {onClear}></Button>
 
        </div>
    )
}

Functions.propTypes = {
    onClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;