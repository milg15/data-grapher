import React from 'react'


/**
 * Component showing input
 *
 * @component
 * @param {type} string
 * @param {id} string
 * @param {placeholder} string
 * @param {onChange} function
 */
function Input({type, id, placeholder, onChange}){

    return(
        <input 
            className="form-input"
            type={type} 
            id={id}
            onChange={onChange} 
            placeholder={placeholder} 
            required
        ></input>
    )
}

export default Input