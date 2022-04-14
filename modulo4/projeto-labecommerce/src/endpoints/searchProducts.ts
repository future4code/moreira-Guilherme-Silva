import {Request, Response} from "express"
import { connection } from ".."


export const searchProducts = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw (`
            SELECT * FROM labecommerce_products;
        `)
        res.status(201).send(result[0])
    } catch (err: any) {
        console.log(err.message)
        res.status(500).send("Unexpected error in get product")
    }
}