import React from 'react'
import ReactDOM from 'react-dom'


export function NewsAdd({ newsAddCallBack }) {
    let inp = React.createRef()
    function onButtonClick(input, callback321) {
        let inputValue = input.current.value
        input.current.value = ""
        callback321({
            'id':new Date().getTime(),
            'feedUrl':inputValue
        })
    }
    function addNews() { onButtonClick(inp, newsAddCallBack) }

    return (
        <div>
            <input ref={inp} onKeyPress={function (e) { if (e.key === 'Enter') { addNews() } }} />
            <button onClick={addNews}>Add!</button>
        </div>
    )
}


