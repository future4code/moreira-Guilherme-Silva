import { baseUrl } from './baseUrl';
import axios from "axios"

type user = {
	id: string;
	name: string;
	email: string;
}

  const sendNotifications = async (users:user[], message: string) => {
    try {
        for (const user of users) {
            await axios.post(`${baseUrl}/notifications`, {
                subscriberId: user.id,
	            message: message
            })
        }
        console.log("Notificações Enviadas")
    } catch (err:any) {
        console.log(err.message)
    }
  }


 