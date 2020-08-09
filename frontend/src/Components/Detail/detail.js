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
    
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        let _id = this.props.match.params._id;
        fetch(`http:localhost:9000/post/${_id}`)
        .then(res=>res.json())
        .then(this.setState({data: res}));
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
            </Background>

        </div>
        )
    }
}
export default PostListing;