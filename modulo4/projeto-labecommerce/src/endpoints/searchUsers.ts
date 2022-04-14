import {Request, Response} from "express"
import { connection } from ".."


export const searchUsers = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw (`
            SELECT * FROM labecommerce_users;
        `)
        res.status(201).send(result[0])
    } catch (err: any) {
        console.log(err.message)
        res.status(500).send("Unexpected error in get user")
    }
}