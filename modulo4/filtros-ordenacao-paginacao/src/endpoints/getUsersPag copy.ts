import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectAllUsers(page:number):Promise<any> {
   const item = (page - 1) * 5
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio LIMIT 5 OFFSET ${item};
   `)

   return result[0]
}


export const getUsersPag = async(req: Request,res: Response): Promise<void> =>{
   try {
      const page = Number(req.query.page)
      const users = await selectAllUsers(page)

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