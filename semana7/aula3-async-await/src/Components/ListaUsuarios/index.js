import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import ItemUsuario from '../ItemUsuario/index'



const ContainerLista = styled.div `
    width: fit-content;
    margin: 0 auto;
`

const Titulo = styled.h2 `
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const token = "igor"



class Usuarios extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            cadastrados: [],
            detalheUsuario: false,
        }
    }

    componentDidMount() {
        this.mostrarTodosUsuarios();
    }

    mostrarTodosUsuarios = async () => {
        const cabecalho = {
            headers: {
                'api-token': token
            }
        };
        

        try {
            const resposta = await axios.get(`${baseUrl}/users/getAllUsers`, cabecalho);
            this.setState({cadastrados: resposta.data.result}) 
        } catch (error) {
            alert("Ocorreu algum erro ao mostrar os usuários.")
        }
    }

    mostrarDetalheUsuario = () => {
        if (this.state.detalheUsuario) {
            this.setState({detalheUsuario: false,})
        } else {
            this.setState({detalheUsuario: true,})
        }
    }


    render(){
        return (
            <ContainerLista>
                <Titulo>Usuários Cadastrados:</Titulo>
                {this.state.cadastrados.map(item => {
                    return <ItemUsuario usuario={item} aoDeletar={this.mostrarTodosUsuarios}></ItemUsuario>
                })}
            </ContainerLista>
        );
    }
}



export default Usuarios;