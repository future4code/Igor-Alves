import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';


const app = express();
app.use(express.json()); // Linha mágica (middleware)


const connection = knex({
  client: 'mysql',
  connection: {
    host : process.env.databaseHost,
    user : process.env.databaseUser,
    password : process.env.databasePassoword,
    database : process.env.databaseName
  }
});


app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/criarUsuario/': 'cria um novo usuário',
      '/editarUsuario/:id': 'altera o apelido do usuário',
      '/deletarUsuario/:id': 'deleta um usuário'
    }
  };

  res.send(resposta)
});


app.post('/criarUsuario/', async (req: Request, res: Response) => {
  const nonQuery = connection.insert(req.body).into('usuarios')

  try {
    const result = await nonQuery;
    res.send(`O usuário ${req.body.nome} foi criado.`);
  } catch(err){
    res.send(err)
  }
});


app.put('/editarUsuario/:id', async (req: Request, res: Response) => {
  const idUsuario = req.params.id
  const novoApelido = req.body.apelido
  
  const nonQuery = connection('usuarios')
  .where('id', '=', idUsuario)
  .update({
    apelido: novoApelido
  })

  try {
    const result = await nonQuery;
    res.send(`O usuário foi atualizado.`);
  } catch(err){
    res.send(err)
  }
});


app.delete('/deletarUsuario/:id', async (req: Request, res: Response) => {
  const idUsuario = req.params.id

  const nonQuery = connection('usuarios')
  .where('id', idUsuario)
  .del()

  try {
    const result = await nonQuery;
    res.send(`O usuário foi deletado.`);
  } catch(err){
    res.send(err)
  }
});


app.get('/usuario/:dado', async (req: Request, res: Response) => {
  const dado:string | number = req.params.dado

  const query = connection.select().from('usuarios').where('nome', dado).orWhere('id', dado)

  try {
    const result = await query;
    res.send(result);
  } catch(err){
    res.send(err)
  }
});


app.get('/usuarios/', async (req: Request, res: Response) => {
  const ordem:string = req.query.ordem
  const idade:number = Number(req.query.idade)

  let query = connection.select().from('usuarios')

  if(idade) {
    query.whereRaw(`floor(datediff(curdate(), dataNascimento)/365) = ${idade}`)
  } else if (ordem){
    query.orderBy('nome', ordem)
  }

  try{
    const result = await query;
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