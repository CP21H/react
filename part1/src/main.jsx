import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

// Renders the content of our React Component "App" into the 
// HTML element with the id "root"

//==============================================
//
// Sub-section 3: Page re-rendering
//
// Notes: - Handled in main.jsx
//
//==============================================

const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
    root.render(
        <App counter={counter} />
    )
}
/*
setInterval(() => {
    refresh()
    counter += 1
}, 1000)
*/