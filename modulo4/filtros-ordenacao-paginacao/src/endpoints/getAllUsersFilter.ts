import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectUsersFilter(name:string, type: string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE name LIKE "%${name}%" AND type = "${type}";
   `)

   return result[0]
}

export const getAllUsersFilter = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name as string
      const type = req.params.type as string
      const users = await selectUsersFilter(name, type)

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