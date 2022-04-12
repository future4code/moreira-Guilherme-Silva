import { baseUrl } from './baseUrl';
import axios from "axios"

// a) GET/subscribers -> https://labenews.herokuapp.com/subscribers

// b) através do :Promise<any[]>

// c)
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };

  const main =async () => {
    const subscribers = await getSubscribers()
    console.log(subscribers) 
}

main()