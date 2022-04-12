import { baseUrl } from './baseUrl';
import axios from "axios"

// a) na função é necessário declarar async antes de function, já o arrow function o async é informado depois do =


// b)

  const getSubscribers = async () :Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  }
  
  const main =async () => {
    const subscribers = await getSubscribers()
    console.log(subscribers) 
}

main()