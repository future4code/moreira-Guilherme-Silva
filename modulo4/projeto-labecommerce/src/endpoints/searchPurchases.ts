import {Request, Response} from "express"
import { connection } from ".."


export const searchPurchases = async (req: Request, res: Response) => {
    const user_id: string = req.params.user_id
    try {
        const results = await connection.raw (`
            SELECT * FROM labecommerce_products JOIN labecommerce_purchases
                ON labecommerce_products.id = labecommerce_purchases.product_id WHERE user_id = "${user_id}";
        `)

        res.status(201).send(results[0])
    } catch (err: any) {
        console.log(err.message)
        res.status(500).send("Unexpected error in get purchases")
    }
}