import React, { Component } from 'react';
import "./App.css"

export class Login extends Component {
    render() {
        return (

            <div className="login  d-flex justify-content-center">
                
                <div className="card my-5 border border-primary  " style={{ width: "30%" }}>
                    <h5 className="card-header text-center  ">Login</h5>
                    <div className="card-body">   
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password"  required/>
                        </div>
                        <div className=" d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary  px-4" >
                                Login Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login