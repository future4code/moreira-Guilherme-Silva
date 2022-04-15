import { Request, Response } from "express"
import { connection } from '..';

const selectData = async (id: string):Promise<any> => {
    const result = await connection("TodoListUser")
        .select("id","nickname")
        .where({id: id});

    return result;
}



export const searchUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await selectData(id)
        if(result.length === 0) {
            throw Error("Usuário não encontrado")
        }
        res.status(201).send(result)
    } catch (err:any) {
        res.status(400).send(err.message);
        }
    
}