import React, {Component} from "react";
import "./Login.css";
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom"
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"

class Login extends Component {
    backend = new BackEndCommunicatorHelper(null)
    login = async () => {
        const request = this.backend.openRequest({
            useBase: false,
            url: endpoints.login,
            method: BackEndCommunicatorHelper.POST,
            body: this.form
        })
        console.log(request, request.body)
        //const response = await request.send()
    }
    form =  {
        email: "",
        password: ""
    }
    render() {
        return (
            <div className = "Login">
                <Navigation />
                <Background>
                    <div className = "row justify-content-between">
                        <AuthInfo authType = "login"/>
                        
                        <div className = "col sep">
                           <div className = "login-form">
                                <span className = "header">
                                    Login
                                </span>
                                <form>
                                    <div className = "form-group">
                                        <label htmlFor = "email">
                                            Email
                                        </label>  
                                            
                                         <input onChange = {(event) => fillInputOnChange(this.form, "email", event)} type = "email" className = "form-field" id = "email" name = "email" />
                                        
                                    </div>
                                    <div className = "form-group last" >
                                        <label htmlFor = "password">
                                            Password
                                        </label> 
                                            
                                         <input onChange = {(event) => fillInputOnChange(this.form, "password", event)} className = "form-field"  type = "password" id = "password" name = "password" />
                                        
                                    </div>
                                    <Link to = {"/signup"}>
                                    <span className = "signuplink">Need an account? Sign up here</span>
                                    </Link>
                                    
                                    <div className = "action d-flex justify-content-end">
                                        <button onClick = {this.login} type = "button" className = "login-button">Log In</button>
                                    </div>
                                         
                                </form>
                           </div>
                           
                        </div> 
                    </div>
                </Background> 

            </div>
        )
    }
}
export default Login;