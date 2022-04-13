import express, {Express, Request, Response} from 'express'
import axios from 'axios';


export const getAdress = async (req: Request, res: Response):Promise<void> => {
    const base_Url = "https://viacep.com.br/ws"
    const zipcode = req.body.cep
    try {
        if(zipcode) {
            const data = await axios.get(`${base_Url}05424150/json/`)
            console.log(data)
            res.send(data)
        }
    } catch (err) {
        console.log(err)
    }
}