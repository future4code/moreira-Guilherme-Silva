import { baseUrl } from './baseUrl';
import axios from "axios"



// a) Função PUT que vai ter os tipos string, string e numbe

// b) 
const news = {
	title: "Fuga das Galinhas",
	content: "Galinhas fogem de galinheiro",
	date: Date.now()
}

  const putNews = async () :Promise<any> => {
    const response = await axios.put(`${baseUrl}/news`, news)
  }

  const main =async () => {
    await putNews()
}

main()