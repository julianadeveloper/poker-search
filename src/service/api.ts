//consumindo a api 
import axios, { AxiosInstance } from "axios";

export class ApiService {
  private readonly api: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

async  findPokemonByName(param : string){
 return await this.api.get(`/pokemon/${param}`)

}


async findPokemonEvolutions(id: number){
  return await this.api.get(`/evolution-chain/${id}`)
}
async findDetailsById(id: number){
  return await this.api.get(`/characteristic/${id}`)
}
listAll(offset: number, limit:number){
  return this.api.get(`/pokemon/?offset=${offset}&limit=${limit}`)
}
}

