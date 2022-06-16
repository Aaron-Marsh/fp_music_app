import React, { useState } from 'react'
import './App.css'

const App = (props) => {
    const [username, setUsername] = useState('')

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(e.target.usernameInput.value)
        e.target.usernameInput.value=''
    }

    return (
    <>
    <h1>Music App!</h1>
    <h2>{props.subHeading}</h2>
    <form onSubmit={handleFormSubmit}>
        <input type="text" name="usernameInput" aria-label="username input"placeholder="What's your name?"></input>
        <input type="submit"></input>
    </form>
    <h2>Hello {username ? username : 'Friend'}!</h2>
    </>
    )
}

export default App
