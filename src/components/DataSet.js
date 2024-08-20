import { useNavigate } from "react-router-dom"

export default function DataSet({ currentNumberData, onSetNumberData, currentDataset, onSetDataset }) {
    const navigate = useNavigate()
    const handleRouterToGraph = () => {
        navigate("/graph")
    }

    const handleNumberDataOnChange = (e) => {
        onSetNumberData(e.target.value)
    }

    const handleDatasetOnClick = () => {
        if (currentNumberData !== "") {
            const copyArr = currentDataset.slice()
            copyArr.push(currentNumberData)
            onSetDataset(copyArr)
            onSetNumberData("")
        }
    }

    const handleEnterUpOnKeyPress = (e) => {
        if (e.code === "Enter") {
            if (currentNumberData !== "") {
                const copyArr = currentDataset.slice()
                copyArr.push(currentNumberData)
                onSetDataset(copyArr)
                onSetNumberData("")
            }
        }
    }

    const onClearData = () => {
        onSetDataset([])
    }

    return (
        <>
            <button onClick={onClearData} className="absolute top-8 right-8 underline">
                clear data set
            </button>
            <div className="w-1/2 mx-auto flex flex-col gap-4 mt-36">
                <input type="number" value={currentNumberData} onChange={handleNumberDataOnChange} onKeyUp={handleEnterUpOnKeyPress} placeholder="Enter data" className="text-center p-4 border-2 border-slate-800 rounded-3xl outline-none placeholder:text-slate-500" />
                <div className="[&_button]:w-full [&_button]:border-2 [&_button]:border-slate-800 [&_button]:rounded-2xl
                                [&_button]:py-2 flex basis-1/2 justify-betwee gap-4">
                    <button className="active:bg-slate-700 active:text-slate-300" onClick={handleDatasetOnClick}>Add data</button>
                    <button className="active:bg-slate-700 active:text-slate-300" onClick={handleRouterToGraph}>Generate graph</button>
                </div>
            </div>
            <p className="text-3xl font-mono text-center absolute bottom-1/4 left-1/2 -translate-x-1/2">
                [{(currentDataset.length === 0) ? `enter ka ng data` : currentDataset.map(x => `${x}, `)}]
            </p>
        </>
    )
} 