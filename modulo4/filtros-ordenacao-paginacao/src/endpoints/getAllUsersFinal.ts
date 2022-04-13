import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectUsersFilter(name:string, type: string, sort:string, order:string, item:number):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"
      ORDER BY ${sort} ${order}
      LIMIT 5 OFFSET ${item};
   `)

   return result[0]
}

export const getAllUsersFinal = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name as string
      let type = req.params.type as string
      let page = Number(req.query.page)
      let sort = req.query.sort as string
      let order = req.query.order as string
      order = order.toUpperCase()
      

      if(!page) {
         page = 1
      }

      if( sort !== "type") {
         sort = "name"
      }

      if(order !== "ASC") {
         order = "DESC"
      }
      const users = await selectUsersFilter(name, type, sort, order, page)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      /* res.send(error.message || error.sqlMessage) */
   }
}