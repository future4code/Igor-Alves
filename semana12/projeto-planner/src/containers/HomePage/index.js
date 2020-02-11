import React from "react";
import { connect } from "react-redux";
import Planner from "../../components/Planner"
import { getAllTasks, createTask } from "../../actions/planner"
import { FormCard, Input, Select } from '../../style/homePage'
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Form, Button } from 'rsuite';


export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    }
  }


  componentDidMount() {
    this.props.getAllTasks()
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    event.preventDefault();

    const { text, day } = this.state.form;
    this.props.createTask(text, day)

    this.setState({form: {}})
  };


  render() {
    console.log(this.state.form)
    return (
      <Container>
        <FormCard>
          <Form  onSubmit={this.handleOnSubmit} layout="inline">
            <Input placeholder="Digite uma tarefa" name="text" onChange={this.handleInputChange} value={this.state.form.text} required/>
            <Select name="day" onChange={this.handleInputChange} value={this.state.form.day} required>
              <option value="" disabled selected>Dia da Semana</option>
              <option value="Segunda">Segunda-Feira</option>
              <option value="Terça">Terça-Feira</option>
              <option value="Quarta">Quarta-Feira</option>
              <option value="Quinta">Quinta-Feira</option>
              <option value="Sexta">Sexta-Feira</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </Select>
            <Button appearance="primary" size="md" onClick={this.handleOnSubmit}>Criar</Button>
          </Form>
        </FormCard>
        <Planner tasks={this.props.allTasks}/>
      </Container>
    )
  }
}



const mapStateToProps = state => ({
  allTasks: state.planner.allTasks
});

  
const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks()),
  createTask: (text, day) => dispatch(createTask(text, day)),
})



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
