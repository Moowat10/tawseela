import React, { Component } from 'react'
import "../assets/css/signview.css"

export default class Signview extends Component {
    render() {
        return (
           <div className = "signform-wrapper">   
            <div className = "signform">
                <div className="title">
                    <h1>Welcome Back</h1>
                </div>
                <div className="input">
                    <h1></h1>
                    <label>Email</label>
                    <input type = "text" w-100 ></input>
                    <label>Password</label>
                    <input type = "text" w-100 ></input>
                    <button>Sign in</button>
                </div>
                <div className="signwith">
                    <h7>Sign in with</h7>
                </div>
            </div>
           </div>  
        )
    }
}
