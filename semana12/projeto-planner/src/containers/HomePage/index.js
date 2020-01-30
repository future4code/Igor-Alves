import React from "react";
import { connect } from "react-redux";
import Planner from "../../components/Planner"
import { getAllTasks, createTask } from "../../actions/planner"
import { FormCard } from '../../style/homePage'
import 'rsuite/dist/styles/rsuite-default.css';
import { Input, Container, Dropdown, Form, Button } from 'rsuite';


class HomePage extends React.Component {
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
    return (
      <Container>
        <FormCard>
          <Form  onSubmit={this.handleOnSubmit} layout="inline">
            <Input size="md" style={{ width: 200, display: 'inline' }} placeholder="Digite uma tarefa" name="text" type='text' onChange={this.handleInputChange} value={this.state.form.text}></Input>
            <Dropdown title="Dia da Semana" name="day" onChange={this.handleInputChange} value={this.state.form.day} >
              <Dropdown.Item value="Segunda">Segunda-Feira</Dropdown.Item>
              <Dropdown.Item value="Terça">Terça-Feira</Dropdown.Item>
              <Dropdown.Item value="Quarta">Quarta-Feira</Dropdown.Item>
              <Dropdown.Item value="Quinta">Quinta-Feira</Dropdown.Item>
              <Dropdown.Item value="Sexta">Sexta-Feira</Dropdown.Item>
              <Dropdown.Item value="Sábado">Sábado</Dropdown.Item>
              <Dropdown.Item value="Domingo">Domingo</Dropdown.Item>
            </Dropdown>
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
