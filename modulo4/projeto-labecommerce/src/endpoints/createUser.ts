import {Request, Response} from "express"
import { connection } from ".."




export const createUser = async (req: Request, res: Response):Promise<void> => {
    let {name, email, password} = req.body
    try {
        await connection.raw (`
            INSERT INTO labecommerce_users
                (id, name, email, password)
            VALUES (
                "${Date.now().toString()}",
                "${name}",
                "${email}",
                "${password}"
            );
        `)
        res.status(201).send("Success in create user!")
    } catch (err: any) {
        console.log(err.message)
        res.status(500).send("Unexpected error in create user")
    }
}