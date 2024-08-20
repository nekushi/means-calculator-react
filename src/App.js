import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import DataSet from "./components/DataSet"
import Graph from "./components/Graph"

export default function App() {
    const [ numberData, setNumberData ] = useState("")
    const [ dataset, setDataset ] = useState([])
    
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <DataSet 
                        currentNumberData={numberData}
                        onSetNumberData={setNumberData}
                        currentDataset={dataset}
                        onSetDataset={setDataset}
                    />
                }></Route>
                {/* <Route path="/dataset" element={<DataSet />}></Route> */}
                <Route path="/graph" element={
                    <Graph 
                        currentDataset={dataset} 
                    />
                }></Route>
            </Routes>
        </>
    )
}

