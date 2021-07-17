import React from 'react';

import Elemento from './elemento';

class Elementos extends React.Component{

    render(){
        return this.props.dato.map((s)=><Elemento 
        key={s.id} 
        elem = {s} 
        eliminarElementoDato = {this.props.eliminarElementoDato} />)
    }
}

export default Elementos;