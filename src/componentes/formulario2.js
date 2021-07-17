import React from 'react';

class Formulario2 extends React.Component{

    state={
        nombre:'',
        apellido:'',
        edad:''
    }

    myOnSubmit=(evn)=>{
        evn.preventDefault();
        this.props.añadirElementoDato(this.state.nombre, this.state.apellido, this.state.edad);
    }

    myOnChange=(env)=>{
        this.setState({
            [env.target.name]:env.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.myOnSubmit} >
                <input name="Nombre"
                    type="text" 
                    placeholder="Ingrese su nombre" 
                    onChange={this.myOnChange} 
                    value={this.state.nombre} />
                <br />
                <br />
                <input name="Apellido"
                    type="text" 
                    placeholder="Ingrese su apellido" 
                    onChange={this.myOnChange} 
                    value={this.state.apellido}/>
                <br />
                <br />
                <input name="Edad"
                    type="text" 
                    placeholder="Ingrese su edad" 
                    onChange={this.myOnChange} 
                    value={this.state.edad}/>
                <br />
                <br />
                <input type="submit" />
            </form>
        )
    }
}

export default Formulario2;