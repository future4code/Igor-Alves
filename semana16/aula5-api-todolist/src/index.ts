import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';
require('dotenv').config()


const app = express();
app.use(express.json()); // Linha mágica (middleware)


const connection = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
});


app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/createUser/': 'cria um novo usuário',
      '/updateUser/:id': 'altera o apelido de um usuário',
      '/deleteUser/:id': 'deleta um usuário',
      '/users/:info': 'busca um usuário pelo nome ou pelo id',
      '/users/': 'busca todos os usuários podendo retornar em ordem alfabetica ou pela idade',
      '/createTask/': 'cria uma nova tarefa',
      '/updateTask/:id': 'altera a data limite e a descrição de uma tarefa',
      '/setResponsible/': 'define um responsavel para uma tarefa',
      '/tasksUserRequesting/': 'mostra todas as tarefas criadas por um usuario, podendo ser filtrada',
      '/tasksUserResponsible/': 'mostra todas as tarefas atribuidas a um usuario, podendo ser filtrada',
      '/allTasks/': 'peaga todas as tarefas do sistema, podendo ser filtrada e ordenada'
    }
  };

  res.send(resposta)
});


app.post('/createUser/', async (req: Request, res: Response) => {
  const builder = connection.insert(req.body).into('users')

  try {
    const result = await builder;
    res.send(`O usuário ${req.body.name} foi criado.`);
  } catch(err){
    res.send(err)
  }
});


app.put('/updateUser/:id', async (req: Request, res: Response) => {
  const userId = req.params.id
  const newNickname = req.body.nickname
  
  const builder = connection('users')
  .where('id', '=', userId)
  .update({
    nickname: newNickname
  })

  try {
    const result = await builder;
    res.send(`O nickname do usuário foi atualizado para ${newNickname}.`);
  } catch(err){
    res.send(err)
  }
});


app.delete('/deleteUser/:id', async (req: Request, res: Response) => {
  const userId = req.params.id

  const builder = connection('users')
  .where('id', userId)
  .del()

  try {
    const result = await builder;
    res.send(`O usuário foi deletado.`);
  } catch(err){
    res.send(err)
  }
});


app.get('/users/:info', async (req: Request, res: Response) => {
  const userInfo:string | number = req.params.info

  const builder = connection.select().from('users').where('name', userInfo).orWhere('id', userInfo)

  try {
    const result = await builder;
    res.send(result);
  } catch(err){
    res.send(err)
  }
});


app.get('/allUsers/', async (req: Request, res: Response) => {
  const order:string = req.query.order
  const age:number = req.query.age

  let builder = connection.select().from('users')

  if(age) {
    builder.whereRaw(`floor(datediff(curdate(), birthDate)/365) = ${age}`)
  } else if (order){
    builder.orderBy('name', order)
  }

  try{
    const result = await builder;
    res.send(result);
  } catch(error) {
    res.send(error);
  }
});


app.post('/createTask/', async (req: Request, res: Response) => {
  const builder = connection.insert(req.body).into('tasks')

  try {
    const result = await builder;
    res.send(`Nova tarefa criada.`);
  } catch(err){
    res.send(err)
  }
});


app.put('/updateTask/:id', async (req: Request, res: Response) => {
  const taskId = req.params.id
  const newDescription = req.body.description
  const newDeadline = req.body.deadline
  
  const builder = connection('tasks')
  .where('id', '=', taskId)
  .update({
    description: newDescription,
    deadline: newDeadline
  })

  try {
    const result = await builder;
    res.send(`A tarefa foi atualizada.`);
  } catch(err){
    res.send(err)
  }
});


app.put('/setResponsible/', async (req: Request, res: Response) => {
  const taskId = req.query.taskId
  const userId = req.query.userId
  
  const builder = connection('tasks')
  .where('id', '=', taskId)
  .update({
    responsibleUser: userId
  })

  try {
    const result = await builder;
    res.send(`Usuário responsável definido com sucesso.`);
  } catch(err){
    res.send(err)
  }
});


app.get('/tasksUserRequesting/', async (req: Request, res: Response) => {
  const userId:string = req.query.id
  const deadline: Date = req.query.deadline

  let builder = connection.select().from('tasks').where('requestingUser', userId)

  if(deadline) {
    builder.where('deadline', deadline)
  } 

  try{
    const result = await builder;
    res.send(result);
  } catch(error) {
    res.send(error);
  }
});


app.get('/tasksUserResponsible/', async (req: Request, res: Response) => {
  const userId:string = req.query.id
  const deadline: Date = req.query.deadline

  let builder = connection.select().from('tasks').where('responsibleUser', userId)

  if(deadline) {
    builder.where('deadline', deadline)
  } 

  try{
    const result = await builder;
    res.send(result);
  } catch(error) {
    res.send(error);
  }
});


app.get('/allTasks/', async (req: Request, res: Response) => {
  const order:string = req.query.order
  const deadline:Date = req.query.deadline
  const orderByDescription:boolean = req.query.orderByDescription
  const orderByRequestingUser:boolean = req.query.orderByRequestingUser

  let builder = connection.select().from('tasks')

  if(deadline) {
    builder.where('deadline', '=', deadline)
  } else if (orderByDescription){
    builder.orderBy('description', order)
  } else if (orderByRequestingUser){
    builder.orderBy('requestingUser', order)
  } 


  try{
    const result = await builder;
    res.send(result);
  } catch(error) {
    res.send(error);
  }
});


const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});