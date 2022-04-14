import {Request, Response} from "express"
import { connection } from ".."




export const createProduct = async (req: Request, res: Response):Promise<void> => {
    let {name, price, image_url} = req.body
    try {
        await connection.raw (`
            INSERT INTO labecommerce_products
                (id, name, price, image_url)
            VALUES (
                "${Date.now().toString()}",
                "${name}",
                ${price},
                "${image_url}"
            );
        `)
        res.status(201).send("Success in create product!")
    } catch (err: any) {
        console.log(err.message)
        res.status(500).send("Unexpected error in create product")
    }
}