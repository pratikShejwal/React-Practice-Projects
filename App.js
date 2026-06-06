import React from 'react'
import ReactDOM from 'react-dom/client'
const reactDivContainer = React.createElement('div',{id:'container'},
    [
        React.createElement('h1',{key:1},'heading 1'),
        React.createElement('h2',{key:2},'heading 2'),
    ]
)
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(reactDivContainer);