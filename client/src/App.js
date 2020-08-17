import React, { useState, useEffect } from "react"
import apis from "./api"
import { TopBar, Table, Graph, Loader } from './components'
import "./App.css"


/**
 * Component showing the main App with all components
 *
 * @component
 */
function App(props){
    const [data, setData] = useState('')
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Get the Data! Data! 
        setLoading(true)

        apis.getData()
        .then(data => {
            setData(data.data.data)
            setLoading(false)
        })
       
    }, []);

    const handleAddData = async (formData) => {
        await apis.addData(formData).then(res => {
            console.log(`Data inserted successfully!`)
        })
    }

    return (
        <div className="App">
            <TopBar action={handleAddData} />
            <div className="container">
              <h1 className="title">DATA</h1>
              <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              {isLoading && <Loader/>}
              {!isLoading && 
                <section className="show-data">
                    <Table data={data}/>
                    <Graph data={data}/>
                </section>
              }
            </div>
            
        </div>
    )
}

export default App