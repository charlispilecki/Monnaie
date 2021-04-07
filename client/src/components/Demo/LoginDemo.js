import React from "react"

export default function() {
    return (
        <div className="pt-5 is-flex is-justify-content-center">
            <SignUpDemo></SignUpDemo>
            <div style={{width: '100px'}}></div>
            <LoginDemo></LoginDemo>
        </div>
    )
}


const LoginDemo = () => {
    return (
        <form action="/login" method="post" style={{maxWidth: '300px'}}>
            <h1 className="title has-text-centered">Log In</h1>
            <div className="control mb-2">
                <input name="username" className="input" type="text" placeholder="User Name" />
            </div>
            <div className="control">
                <input name="password" className="input" type="text" placeholder="Password" />
            </div>
            <div className="field is-grouped mt-3 is-flex is-justify-content-center">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    )
}

const SignUpDemo = () => {
    return (
        <form action="/signup" method="post" style={{maxWidth: '300px'}}>
            <h1 className="title has-text-centered">Sign Up</h1>
            <div className="control mb-2">
                <input name="username" className="input" type="text" placeholder="User Name" />
            </div>
            <div className="control">
                <input name="password" className="input" type="text" placeholder="Password" />
            </div>
            <div className="field is-grouped mt-3 is-flex is-justify-content-center">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    )
}