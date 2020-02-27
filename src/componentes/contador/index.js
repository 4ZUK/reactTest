import React , {Component} from 'react';
import './contador.css'

class Contador extends Component{
    state={
        numero:0
    }
    
      aumentar=()=>{
        this.setState({ numero: this.state.numero + 1 });
    
        }
      
      diminuir=()=>{
        if(this.state.numero>0){
          this.setState({ numero: this.state.numero - 1 });
          }
        }
        render() {      //funcao que vai renderizar as coisas na tela
          return (
            <div>                          
              <h1 className="contador-titulo">
                { this.state.numero }
              </h1>
      
              <button type="button" className="contador-aumentar" onClick={this.aumentar} >aumentar</button>
      
              <button type="button" className="contador-diminuir" onClick={this.diminuir}>diminuir</button>
      
            </div>
          )
        }
}

export default Contador; 