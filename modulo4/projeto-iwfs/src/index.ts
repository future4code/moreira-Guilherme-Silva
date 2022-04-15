import { searchTask } from './endpoints/searchTask';
import { createTask } from './endpoints/createTask';

import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { createUser } from './endpoints/createUser';
import { searchUser } from './endpoints/searchUser';
import { updateUser } from './endpoints/updateUser';


const app: Express = express();

app.use(express.json());
app.use(cors());

dotenv.config();


export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//Criar Usuário
app.post("/user", createUser)

//Buscar Usuário
app.get("/user/:id", searchUser)

//Atualizar usuário
app.put("/user/edit/:id", updateUser)

//Criar Tarefa
app.post("/task", createTask)

//Buscar Tarefa
app.get("/task/:id", searchTask)