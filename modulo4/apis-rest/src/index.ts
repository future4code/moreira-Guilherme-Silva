import { Sign } from "crypto";
import express from "express";

import { AddressInfo } from "net";


const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}


type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

export let users:user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

app.get("/users", (req, res) => {
    try {
        let name = req.query.name as string
        let type = req.query.type as string
        if(name){
            name = name.toLowerCase()
            const usersFilterName = users.filter(user => {
                return user.name.toLowerCase().includes(name)
            })
            res.send(usersFilterName)
        }
        if (type) {
            type = type.toUpperCase()
            const usersFilter = users.filter(user => {
                return user.type === type
            })
            res.send(usersFilter)
        }
        res.status(200).send(users)
    } catch (err:any) {
        res.status(400).send(err.message)
    }
})

app.put("/users", (req, res) => {
    try {
        const name:string = req.body.name 
        const email:string = req.body.email
        const age:number = req.body.age
        let type = req.body.type as string
    
        if (!name || !email || !age || !type) {
            throw new Error("Dados Faltantes")
        }
        if (typeof name !== "string") {
        throw new Error("Nome Deve Ser String")
        }

        if (typeof email !== "string") {
        throw new Error("Email Deve Ser String")
        }

        if (typeof age !== "number") {
        throw new Error("Idade Deve Ser Number")
        }

        type = type.toUpperCase()
        if (!(type === "ADMIN" || type === "NORMAL")) {
          throw new Error("Invalid type")
        }
        const newUser: user = {
            id: users.length + 1,
            name: name,
            email: email,
            age: age,
            type: type === UserType.NORMAL
              ? UserType.NORMAL
              : UserType.ADMIN
          }
      
          users.push(newUser)
      
          res.status(200).send(users)
    } catch (err:any) {
        res.status(400).send(err.message)
    }
})

// Exercício 1

//a) Método GET 
//b) Utilizaria a entidade users

// Exercício 2

//a) Os parametros foram passados pelo query, pois aceitam valores vazios
//b) utilizando types e enums para fixar valores

// Exercício 3

//a) Query params

// Exercício 4

//a) O programa continua funcionando normalmente

//b) Não, pois novos itens deve ser criados com Post