import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Table,Button, Card} from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Loading from './animations/Loading';



const Lista = props =>( 
     <tr className="rows-font">
        <td>{props.contato.nome}</td>
        <td>{props.contato.email}</td>
        <td>{props.contato.telefone}</td>
        <td>{props.contato.updatedAt.substring(0, 10)}</td>   
        <td>
            <Link className="btn btn-warning " to={"/editar/" + props.contato._id} > <FontAwesomeIcon icon={faUserEdit}/></Link> &nbsp; <Button variant="danger" href="#" onClick={() => { props.removerContato(props.contato._id)}}><FontAwesomeIcon icon={faUserAltSlash}/></Button>
        </td>
     </tr>
)


export default class ListaUsuarios extends Component {
    constructor(props){
        super(props);
        this.state = {
            contatos: [],
            done: undefined
        }

        this.removerContato = this.removerContato.bind(this);
    }

    componentDidMount(){
        this.setState({
            done: false
        })
        setTimeout(() => {
            axios.get('/dashboard')
            .then(response => {
                console.log(response.data);
                this.setState({
                    contatos: response.data,
                    done: true
                })
            })
            .catch(error => console.log(error))

        }, 1200);
        console.log(this.state.contatos.length);
    }

    removerContato(id){
        axios.delete('/dashboard/remover/'+id)
            .then(res => console.log(res.data));

            this.setState({
                contatos: this.state.contatos.filter(el => el._id !== id)
            })
    }

    listaUsuarios() {
        return this.state.contatos.map(contato => {
            return <Lista contato={contato} removerContato={this.removerContato} key={contato._id} />
        })
    }



    render(){
        const {done} = this.state;
        const {contatos} = this.state;
        return(
            <div className="contatos-container">
             <h3 className="contatos-title">Contatos</h3>
             {(!done  ) ? (
                 <Loading />
                  ) : (
                             (contatos.length > 0 ) ? 
                             (
                                 <div>
                                 <Card className="text-center card-style-render">
                                    <Card.Header>Atenção</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Sem contatos no banco de dados</Card.Title>
                                        <Card.Text>
                                            Deseja adicionar um novo contato?
                                        </Card.Text>
                                        <Link to="/adicionar" className="btn btn-dark">Adicionar</Link>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Skylar IA</Card.Footer>
                                    </Card>
                                </div>
                             ) : (
                                <CSSTransition
                                    in={true}
                                    appear={true}
                                    timeout={1000}
                                    classNames="fade"
                                    >
                                    <Table striped bordered hover variant="light" responsive >
                                        <thead className="thead-dark" > 
                                            <tr>
                                                <th>Nome</th>
                                                <th>E-mail</th>
                                                <th>Telefone</th>
                                                <th>Atualizado em</th>
                                                <th>Opções</th>
                                            </tr>
                                        </thead>
                                        <tbody>    
                                        {this.listaUsuarios()}
                                        </tbody>
                                    </Table>
                                </CSSTransition>
                             )
                        )}
            </div>
        )
    }
}