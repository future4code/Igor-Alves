import React from 'react';
import './App.css';
import PrimeiraEtapa from './components/PrimeiraEtapa/PrimeiraEtapa'
import SegundaEtapa from './components/SegundaEtapa/SegundaEtapa'
import TerceiraEtapa from './components/TerceiraEtapa/TerceiraEtapa'
import EtapaFinal from './components/EtapaFinal/EtapaFinal'



let tela = (<PrimeiraEtapa/>)


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pagina: "PrimeiraEtapa"
    };
  }
  
  
  onclickProximaEtapa = () => {
    switch(this.state.pagina) {
      case "PrimeiraEtapa":
      this.setState({
        pagina: "SegundaEtapa"
      })
      tela = (<SegundaEtapa/>);
      break
      case "SegundaEtapa":
      this.setState({
        pagina: "TerceiraEtapa"
      })
      tela = (<TerceiraEtapa/>);
      break
      case "TerceiraEtapa":
      this.setState({
        pagina: "EtapaFinal"
      })
      tela = (<EtapaFinal/>)
      break
    }
  }
   
  
  render(){
    return (
      <div className="App">
        {tela}
        {this.state.pagina !== "EtapaFinal" && <button onClick={this.onclickProximaEtapa}>Próxima Etapa</button>}
      </div>
    );
  }
}



export default App;
