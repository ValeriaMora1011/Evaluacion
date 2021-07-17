import React from 'react';

class Formulario1 extends React.Component{

    state = {
        nombre:"",
        apellido:"",
        edad:""
    }


    myOnSubmit=(evn)=>{
        evn.preventDefault();
        console.log("Enviar",this.state.nombre,"  -  ", this.state.apellido, " - ", this.state.edad);
        this.props.añadirConfiguracion(this.state.nombre,"  -  ", this.state.apellido, " - ", this.state.edad);
    }

    myOnChange=(env)=>{
        console.log([env.target.name]," - ", env.target.value)
        this.setState({
            [env.target.name]:env.target.value
        })
    }

    render(){
        console.log(this.props);
        return (
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
                value={this.state.apellido} />
                <br />
                <br />
                <input name="Edad"
                type="text" 
                placeholder="Ingrese su edad" 
                onChange={this.myOnChange} 
                value={this.state.edad} />
                <br />
                <br />
                <input type="submit" />
                <input type="reset"/>
            </form>
        )
    }
}

export default Formulario1