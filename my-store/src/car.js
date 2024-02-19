import React from 'react'

class car extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{borderColor:this.props.color , borderWidth:'10px', borderStyle:'solid'}}>
            <img src={this.props.src} alt='car' width="200"/>
                <p>description: {this.props.description}</p>
                <p>color: {this.props.color}</p>
                <p>brand: {this.props.brand}</p>
            </div>
        );
    }
}

export default car;
