import { Request, Response } from "express"
import { connection } from "../data/connection"




export async function orderUsers(name:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio ORDER BY ${name} ASC;
   `)

   return result[0]
}
export async function orderUsersDefault():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio ORDER BY email ASC;
   `)

   return result[0]
}

export const getOrderUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name as string
      
      const users = await orderUsers(name)
      
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