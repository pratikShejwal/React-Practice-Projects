import React from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from 'react/jsx-runtime'
const reactDivContainer = React.createElement('div',{id:'container'},
    [
        React.createElement('h1',{key:1},'heading 1'),
        React.createElement('h2',{key:2},'heading 2'),
    ]
)

const name = "xyxx"
const h1 = (<h1>My name is {name}</h1>)
// jsx is html written in js
// jsx -> into react element by babel;
console.log(h1);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(h1);