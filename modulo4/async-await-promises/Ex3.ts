import { baseUrl } from './baseUrl';
import axios from "axios"

type user = {
	id: string;
	name: string;
	email: string;
}

// a) Não é informado nenhum erro, mas pode haver erro, já que o retorno do response.data pode estar com outra tipagem

// b) Isto feito justamente para não ter erro de tipagem, pois estamos "forçando que a saida dos dados seja no formato da tipagem"

// c) 
  const getSubscribers = async () :Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res:any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
  }

const main =async () => {
    const subscribers = await getSubscribers()
    console.log(subscribers) 
}

main()
