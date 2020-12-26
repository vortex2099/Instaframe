import React, { useState, useContext}from 'react'
import { Link, useHistory } from 'react-router-dom'



const SignIn = () => {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instaframe</h2>
                <input
                    type="text"
                    placeholder="email"


                />
                <input
                    type="password"
                    placeholder="password"

                />
                <button className="btn waves-effect waves-light #f44336 red darken-1"

                >
                    Login
            </button>
                <h5>
                    <Link to="/signup">Don't have an account ?</Link>
                </h5>

            </div>
        </div>
    )
}


export default SignIn