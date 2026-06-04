
const reactDivContainer = React.createElement('div',{id:'container'},
    [
        React.createElement('h1',{},'heading 1'),
        React.createElement('h2',{},'heading 2'),
    ]
)
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(reactDivContainer);