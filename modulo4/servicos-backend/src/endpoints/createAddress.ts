import { connection } from '..';
import { getAddressInfo } from '../services/getAddressInfo';
import {Request, Response} from 'express'



export const createAddress = async (req: Request, res: Response) => {
    const {zipcode} = req.body
    try {
        const address = await getAddressInfo(zipcode)
        if(!address) {
            throw new Error("Erro ao solicitar Endereço")
        }
        await connection.raw(`
            INSERT INTO Zipcodes
                (cep, Logradouro, Complemento, Bairro, Cidade, Estado)
            VALUES (
                "${address.cep}",
                "${address.logradouro}",
                "${address.complemento}",
                "${address.bairro}",
                "${address.cidade}",
                "${address.estado}"
            )
        `)
        res.status(201).send("Sucesso!")
    } catch (err:any) {
        res.send("Erro Inesperado")
        return null
    }
}