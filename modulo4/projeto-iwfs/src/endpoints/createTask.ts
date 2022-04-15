import { Request, Response } from "express"
import { connection } from '..';

const insertData = async (title: string, description: string, limitDate:string, creatorUserId:string):Promise<void> => {
    const result = await connection.raw(`
		INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
            VALUES (
                "${Date.now().toString()}",
                "${title}",
                "${description}",
                "${limitDate}",
                "${creatorUserId}"
            );
	`);
}



export const createTask = async (req: Request, res: Response) => {
    const {title, description, limitDate, creatorUserId} = req.body
    try {
        if(!title|| title === "") {
            throw Error("Necessário informar um title")
        }
        if(!description || description === "") {
            throw Error("Necessário informar um description")
        }
        if(!limitDate || limitDate === "") {
            throw Error("Necessário informar um limitDate")
        }
        if(!creatorUserId || creatorUserId === "") {
            throw Error("Necessário informar um creatorUserId")
        }
        const datas = limitDate.split("/")
        const novaData = datas[2] + "/" + datas[1] + "/" + datas[0]
        await insertData(title, description, novaData, creatorUserId)
        res.status(201).send("Tarefa criada com sucesso!")
    } catch (err:any) {
        res.status(400).send(err.message);
        }
    
}