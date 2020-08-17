import React from 'react'
import "./style.css" 


/**
 * Component showing tha data table
 *
 * @component
 * @param {data} object
 */
function Table({ data }) {
    /* Retorna las tablas */
    const Rows = () =>
    {
    const total = data.reduce(
      (a, b) => {
        return (typeof a === "object") ? 
            a.participation + b.participation : 
            parseInt(a) + parseInt(b.participation)
      })

    console.log(total)
    return <tbody>
      {
        data.map(({_id, firstName, lastName, participation}, k)=>
          <tr key={_id}>
                <td className="table-id">{k+1}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td className="keep">{`${participation} (${Math.round(parseInt(participation)/total*1000)/10}%)` }</td>
          </tr>
        )}
     </tbody>}

    return (
        <table>
          <thead>
            <tr>
                <th className="table-id"></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th className="keep">Participation</th>
            </tr>
          </thead>
          < Rows/>
        </table>
   )
 }

 export default Table