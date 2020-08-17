import React, {useState} from 'react'
import Input from './Input.jsx'
import Button from './Button.jsx'
import "./style.css"

/**
 * Component showing data graph
 *
 * @component
 * @param {data} object
 */
function Form({ action }){
    const [firstName, setFName] = useState('')
    const [lastName, setLName] = useState('')
    const [participation, setParticipation] = useState('')

    const onSubmit = () => {
        const payload = { firstName, lastName, participation }

        action(payload)
    }


    return ( 
    <form className="form" onSubmit={onSubmit}>
        <Input type="text"  
            id="fname"
            placeholder="First Name" 
            onChange={e=>setFName(e.target.value)} 
        />
        <Input type="text" 
            id="lname"
            placeholder="Last Name" 
            onChange={e=>setLName(e.target.value)} 
        />
        <Input type="number"
            id="participation" 
            placeholder="Participation" 
            onChange={e=>setParticipation(e.target.value)} 
        />
        <Button type="submit" value="SEND" />
    </form>
    )
}

export default Form