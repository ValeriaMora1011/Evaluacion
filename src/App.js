import React from 'react';
import './App.css';
import dato from './datos/datos.json';
import Elementos from './componentes/elementos';
import Formulario2 from './componentes/formulario2';

class App extends React.Component{

  state = {
    dato:dato
  }

  a├▒adirElementoDato=(nombreIn, apellidoIn, edadIn)=>{
    const newElement  = {
      id : this.state.dato.slice(-1)[0].id+1,
      nombre:nombreIn,
      apellido:apellidoIn,
      edad:edadIn
    }
    this.setState({
      dato: [...this.state.dato, newElement]
    })
  }

  eliminarElementoDato=(id)=>{
    console.log("Eliminar elemento")
  }

  render(){
    return<div>
      <Formulario2 a├▒adirElementoDato={this.a├▒adirElementoDato} />
      <Elementos dato={this.state.dato} eliminarElementoDato={this.eliminarElementoDato} />
    </div>
  }
}


export default App;