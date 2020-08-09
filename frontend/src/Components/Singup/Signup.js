import React, {Component} from "react";
import "./Signup.css"
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom";
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
class Signup extends Component {
    backend = new BackEndCommunicatorHelper(null)
    signup = async () => {
        const request = this.backend.openRequest({
            useBase: false,
            url: endpoints.signup,
            method: BackEndCommunicatorHelper.POST,
            body: this.form
        })
        console.log(request, request.body)
        //const response = await request.send()
    }
    form =  {
        email: "",
        password: "",
        username: "",
        phone: ""
    }

    render() {
        return (
        <div  className = "Signup">
            <Navigation />
            <Background>
                <div className = "row">
                <AuthInfo authType = "signup"></AuthInfo>
                <div className = "col sep">
                           <div className = "signup-form">
                                <span className = "header">
                                    Sign Up
                                </span>
                                <form>
                                <div className = "form-group">
                                        <label htmlFor = "fullname">
                                            Full Name
                                        </label> 
                                            
                                         <input onChange = {(event) => fillInputOnChange(this.form, "username", event)} type = "text" className = "form-field" id = "fullname" name = "username" />
                                        
                                    </div>
                                    <div className = "form-group" >
                                        <label htmlFor = "phone">
                                            Phone Number
                                        </label> 
                                            
                                         <input onChange = {(event) => fillInputOnChange(this.form, "phone", event)} className = "form-field"  type = "text" id = "phone" name = "phone" />
                                        
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor = "email">
                                            Email
                                        </label> 
                                            
                                         <input onChange = {(event) => fillInputOnChange(this.form, "email", event)}  type = "email" className = "form-field" id = "email" name = "email" />
                                        
                                    </div>
                                    <div className = "form-group last" >
                                        <label htmlFor = "password">
                                            Password
                                        </label> 
                                            
                                         <input onChange = {(event) => fillInputOnChange(this.form, "password", event)} className = "form-field"  type = "password" id = "password" name = "password" />
                                        
                                    </div>
                                    <Link to = {"/"}>
                                    <span className = "loginlink">Have an account? Log In here</span>
                                    </Link>
                                    <div className = "action d-flex justify-content-end">
                                        <button onClick = {this.signup} type = "button" className = "signup-button">Sign Up</button>
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
export default Signup;