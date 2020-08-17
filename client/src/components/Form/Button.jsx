import React from 'react'



/**
 * Component showing a button
 *
 * @component
 * @param {type} string
 * @param {value} string
 */
function Button({type, value}){

    return(
        <input className="btn" type={type} value={value}/>
    )
}

export default Button