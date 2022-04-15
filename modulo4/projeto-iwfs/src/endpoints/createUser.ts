import { Request, Response } from "express"
import { connection } from '..';

const insertData = async (name: string, nickname: string, email:string):Promise<void> => {
    const result = await connection.raw(`
		INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES (
                "${Date.now().toString()}",
                "${name}",
                "${nickname}",
                "${email}"
            );
	`);
}



export const createUser = async (req: Request, res: Response) => {
    const {name, nickname, email} = req.body
    try {
        if(!name || name === "") {
            throw Error("Necessário informar um nome")
        }
        if(!nickname || nickname === "") {
            throw Error("Necessário informar um nickname")
        }
        if(!email || email === "") {
            throw Error("Necessário informar um email")
        }
        await insertData(name, nickname, email)
        res.status(201).send("Usuário criado com sucesso!")
    } catch (err:any) {
        res.status(400).send(err.message);
        }
    
}