import { createProduct } from './endpoints/createProduct';
import { searchUsers } from './endpoints/searchUsers';
import { createUser } from './endpoints/createUser';
import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";


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

// Uso da Tabela users
app.post("/users", createUser) //criar usuários
app.get("/users", searchUsers) //pegar todos usuários
// Uso da Tabela products
app.post("/products", createProduct) //crir produtos