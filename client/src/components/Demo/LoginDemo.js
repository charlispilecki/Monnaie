import React from "react"

export default function() {
    return (
        <div>
            <SignUpDemo></SignUpDemo>
            <br></br>
            <LoginDemo></LoginDemo>
        </div>
    )
}


const LoginDemo = () => {
    return (
        <form action="/login" method="post" style={{maxWidth: '300px'}}>
            <h1>Log In</h1>
            User: <input name="username"></input>
            <br></br>
            Password: <input name="password"></input>
            <br></br>
            <input type="submit"></input>
        </form>
    )
}

const SignUpDemo = () => {
    return (
        <form action="/signup" method="post" style={{maxWidth: '300px'}}>
            <h1>Sign Up</h1>
            User: <input name="username"></input>
            <br></br>
            Password: <input name="password"></input>
            <br></br>
            <input type="submit"></input>
        </form>
    )
}