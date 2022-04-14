import {Request, Response} from "express"
import { connection } from ".."




export const createPurchase = async (req: Request, res: Response):Promise<void> => {
    let {user_id, product_id, quantity} = req.body

    try {
        const price = await connection.raw (`
            SELECT price FROM labecommerce_products WHERE id = "${product_id}";
        `)
        if(!price[0][0].price) {
            throw new Error("Error in get price")
        }
        const total_price: number = quantity * price[0][0].price

        await connection.raw (`
            INSERT INTO labecommerce_purchases
                (id, user_id, product_id, quantity, total_price)
            VALUES (
                "${Date.now().toString()}",
                "${user_id}",
                "${product_id}",
                ${quantity},
                ${total_price}
            );
        `)
        res.status(201).send("Success in create purchase!")
    } catch (err: any) {
        console.log(err.message)
        res.status(500).send(Error || "Unexpected error in create purchase")
    }
}