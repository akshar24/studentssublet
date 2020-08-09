import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import "./PostListing.css"
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom";
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
import {Form} from 'react-bootstrap'
class PostListing extends Component {
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
        title: "",
        description: "",
        address: "",
        semester: "",
        university: "",
        city: "",
        price: null,
        photos:""
    }

    render() {
        return (
        <div  className = "PostListing">
            <Navigation />
            <Background>
                <div className = "row">
                    <div className = "col">
                        <span className = "header">
                            Create a new Listing
                        </span>
                    </div>
                    <div className= "col xicon">
                        <div type="button" class="close button btn-lg" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </div>
                    </div>
                </div>
                <div className = "postListing-form row">
                    <div className = "col sep">
                        <form>
                            <div className = "form-group">
                                <label htmlFor = "title">
                                    Title
                                </label>  
                                <input onChange = {(event) => fillInputOnChange(this.form, "title", event)} 
                                type = "text" className = "form-field" id = "title" name = "title" />
                                
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "description">
                                    Description
                                </label>  
                                <input onChange = {(event) => fillInputOnChange(this.form, "description", event)} 
                                type = "text" className = "form-field" id = "description" name = "description" />
                                
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "address">
                                    Address
                                </label>  
                                <input onChange = {(event) => fillInputOnChange(this.form, "address", event)} 
                                type = "text" className = "form-field" id = "address" name = "address" />
                                
                            </div>
                
                        </form>
                    </div>
                    <div className = "col sep">
                        <Form>
                                {['radio'].map((type) => (
                                    <div className="mb-3">
                                        <Form.Check 
                                            type={type}
                                            id="radio-summer"
                                            label='Summer'
                                            className="radio-button"
                                        />
                                        <Form.Check 
                                            type={type}
                                            id="radio-spring"
                                            label='Spring'
                                        />

                                        <Form.Check
                                            type={type}
                                            label="Fall"
                                            id="radio-fall"
                                        />

                                        <Form.Check
                                            type={type}
                                            label="Winter"
                                            id="radio-winter"
                                        />
                                    </div>
                                ))}
                        </Form> 
                        <div className = "form-group">
                            <label htmlFor = "University">
                                University
                            </label>  
                            <input onChange = {(event) => fillInputOnChange(this.form, "university", event)} 
                            type = "text" className = "form-field" id = "university" name = "university" />
                            
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "description">
                                city
                            </label>  
                            <input onChange = {(event) => fillInputOnChange(this.form, "city", event)} 
                            type = "text" className = "form-field" id = "city" name = "city" />
                        </div>
                    </div>
                    <div className = "col">       
                        <div className = "form-group">
                            <label htmlFor = "price">
                                Target price
                            </label>  
                            <input onChange = {(event) => fillInputOnChange(this.form, "price", event)} 
                            type = "text" className = "form-field" id = "price" name = "price" />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "photos">
                                Upload Photos
                            </label>
                            <span>(optional)</span>
                            <input onChange = {(event) => fillInputOnChange(this.form, "price", event)} 
                            type = "text" className = "form-field" id = "price" name = "price" />
                        </div>
                    </div>
                </div>
            </Background>

        </div>
        )
    }
}
export default PostListing;