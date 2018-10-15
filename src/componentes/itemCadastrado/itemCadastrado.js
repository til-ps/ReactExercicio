import React from 'react';


class Li extends React.Component{
    render(){
        return(
            <li key={this.props.key}>{`${this.props.produto.quantidade} - ${this.props.produto.nome} - ${this.props.produto.marca}`}</li>
        );
    }
}

export default Li;