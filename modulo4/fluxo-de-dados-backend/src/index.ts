import express from "express";

import { AddressInfo } from "net";

import { produtos } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

app.get("/test", (req, res) => {
    res.send("A API está funcionando normalmente")
})

app.post("/product", (req, res) => {
    try {
        if(!req.body.name || !req.body.price) {
            throw new Error("Não foi fornecido o nome ou o preço do produto")
        }
        if(typeof req.body.name !== "string") {
            throw new Error("O nome deve ser string")
        }
        if(typeof req.body.price !== "number") {
            throw new Error("O preço deve ser number")
        }
        if(Number(req.body.price)  <= 0) {
            throw new Error("O preço deve ser positivo")
        }
        const newProduct = {
            id: String(produtos.length + 1),
            name: req.body.name,
            price: Number(req.body.price)
        }
        produtos.push(newProduct)
        console.log("Sucesso!")
        res.send(produtos)
    } catch (err:any) {
        switch (err.message) {
            case "Não foi fornecido o nome ou o preço do produto":
                res.status(422)
                break
            case "O nome deve ser string":
                res.status(422)
                break
            case "O preço deve ser number":
                res.status(422)
                break
            case "O preço deve ser positivo":
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(err.message || "Erro")
    }
    
})

app.get("/product", (req, res) => {
    res.send(produtos)
})

app.post("/product/:id", (req, res) => {
    try {
        if(!req.body.price) {
            throw new Error("Não foi fornecido o preço do produto")
        }
        if(typeof req.body.price !== "number") {
            throw new Error("O preço deve ser number")
        }
        if(Number(req.body.price)  <= 0) {
            throw new Error("O preço deve ser positivo")
        }
        const id: string = req.params.id
        const idIndex: number = produtos.findIndex(product => {
            return product.id === id
        })
        if(Number(idIndex) < 0) {
            throw new Error("O produto a ser editado não foi encontrado")
        }
        produtos[idIndex].price = req.body.price
        res.send(produtos)
    } catch (err:any) {
        switch (err.message) {
            case "Não foi fornecido o preço do produto":
                res.status(422)
                break
            case "O preço deve ser number":
                res.status(422)
                break
            case "O preço deve ser positivo":
                res.status(422)
                break
            case "O produto a ser editado não foi encontrado":
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(err.message || "Erro")
    }
})

app.delete("/product/:id", (req, res) => {
    try{
        const id: string = req.params.id
        const idIndex: number = produtos.findIndex(product => {
            return product.id === id
        })
        if(Number(idIndex) < 0) {
            throw new Error("O produto a ser editado não foi encontrado")
        }
        produtos.splice(idIndex, 1)
        res.send(produtos)
    } catch (err:any) {
        switch (err.message) {
            case "O produto a ser editado não foi encontrado":
                res.status(422)
            default:
                res.status(500)
        }
        res.send(err.message || "Erro")
    }
})
