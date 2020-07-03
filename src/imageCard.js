import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.imageRef =  React.createRef();
        this.state = {spans: 0};
        }
    
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil((height/10));
        this.setState({spans: spans});
    }
    render() { 
        return (
            <div style = {{gridRow: `span ${this.state.spans}`}}>
            <img ref = {this.imageRef}
                alt = {this.props.image.description}
                src = {this.props.image.urls.regular} /> 
            </div>
         );
    }
}
 
export default ImageCard;