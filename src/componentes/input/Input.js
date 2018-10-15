import React from 'react';


class Input extends React.Component{
    render(){
        return(
            <input onChange={this.props.atualizar} value={this.props.value} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder}/>
        );
    }
}

export default Input