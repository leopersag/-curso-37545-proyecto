import React, { Component } from "react";

//Definiendo un componente como una 'clase'

class Footer extends Component {

    render(){
        return(
            <div>
                <hr />
                <p>{this.props.ubicacion} {this.props.provincia}</p>
            </div>    
        )        
    }
}
export default Footer;
