import { Request, Response } from "express"
import { connection } from "../data/connection"




export async function orderUsers(sort:string, order:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio ORDER BY ${sort} ${order};
   `)

   return result[0]
}

export const getOrderUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let sort = req.query.sort as string
      let order = req.query.order as string
      order = order.toUpperCase()
      
      if(sort !== "name" && sort !== "type") {
         sort = "email"
      }

      if(order !== "DESC") {
         order = "ASC"
      }
      const users = await orderUsers(sort, order)
      
      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      /* res.send(error.message || error.sqlMessage) */
   }
}