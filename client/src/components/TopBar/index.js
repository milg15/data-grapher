import React from 'react'
import Form from '../Form'
import "./style.css"


/**
 * Component showing the header and contains the form
 *
 * @component
 * @param {action} function
 */
function TopBar({action}) {
    return (
        <header className="header">
            <Form action={action} />
        </header>
    )
}

export default TopBar