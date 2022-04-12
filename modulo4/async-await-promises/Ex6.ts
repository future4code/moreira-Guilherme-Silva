import { baseUrl } from './baseUrl';
import axios from "axios"


// a) Ele exexuta tudo de maneira assincrona ao receber um array de promises

// b) Ele é vantajoso quando está trabalhando com grandes volumes de dados, pois ele não espera uma requisição para fazer a outra


type user = {
	id: string;
	name: string;
	email: string;
}

  const sendNotifications = async (users:user[], message: string):Promise<void> => {
    try {
        const requests = users.map(user => {
            return axios.post(`${baseUrl}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })
        await Promise.all(requests)
    } catch (err:any) {
        console.log(err.message)
    }
  }


 