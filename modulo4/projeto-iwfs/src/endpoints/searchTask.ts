import { Request, Response } from "express"
import { connection } from '..';

const selectData = async (id: string):Promise<any> => {
    const result = await connection.raw(`
    SELECT nickname, title, description, status, limit_date, creator_user_id FROM TodoListUser JOIN TodoListTask
	ON TodoListUser.id = TodoListTask.creator_user_id WHERE TodoListTask.id = "${id}";
`);

    return result[0][0];
}



export const searchTask = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await selectData(id)
        if(!result) {
            throw Error("Usuário não encontrado")
        }

        const day = result.limit_date.getDate()
        const month = Number(result.limit_date.getMonth()) + 1
        const year = result.limit_date.getFullYear()
        const data = day + "/" + month + "/" + year

        const tasks = {
            taskId: id,
            title: result.title,
            description: result.description,
            limitDate: data,
            status: result.status,
            creatorUserId: result.creator_user_id,
            creatorUserNickname: result.nickname
        }
        res.status(201).send(tasks)
    } catch (err:any) {
        res.status(400).send(err.message);
        }
    
}