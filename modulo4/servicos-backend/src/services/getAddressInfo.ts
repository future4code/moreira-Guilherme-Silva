import axios from 'axios';
import { Address } from '../types';

const base_Url = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
    try{
        const response = await axios.get(`${base_Url}/${zipcode}/json/`)
        const address: Address = {
            cep: response.data.cep,
            logradouro: response.data.logradouro,
            numero: "",
            complemento: response.data.complemento,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }
        return address

    } catch (err) {
        console.log("Erro na função getAddressInfo:", err)
        return null
    }
}