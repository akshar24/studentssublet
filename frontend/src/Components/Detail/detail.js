import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom";
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
import {Form} from 'react-bootstrap'
class Detail extends Component {
    backend = new BackEndCommunicatorHelper(null)
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
    }

    async componentDidMount(){
        
        const request = this.backend.openRequest({
            useBase: false,
            url: `http://localhost:9000/post/${this.props.match.params._id}`,
            method: BackEndCommunicatorHelper.GET
            
        })
        await request.send().then(
            response => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            }
        )
    }


    render() {
        return (
        <div  className = "PostListing">
            <Navigation />
            <Background>
                <div className = "row">
                    <div className = "col">
                        <span className = "header">
                            {this.state.data.title}
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
export default Detail;