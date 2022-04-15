import { Request, Response } from "express"
import { connection } from '..';

const updateData = async (id: string, name:string, nickname:string):Promise<void> => {
    const result = await connection.raw(`
        UPDATE TodoListUser
        SET name = "${name}", nickname = "${nickname}"
        WHERE id = "${id}"
`);

}



export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const {name, nickname} = req.body
        if(!name || name === "") {
            throw Error("Necessário informar um nome")
        }
        if(!nickname || nickname === "") {
            throw Error("Necessário informar um nickname")
        }
        await updateData(id, name, nickname)
        res.status(201).send("Usuário atualizado com sucesso!")
    } catch (err:any) {
        res.status(400).send(err.message);
        }
    
}