//consume api 
import axios, { AxiosInstance } from "axios";

export class ApiService {
  private readonly api: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

async  findPokemonByName(){
 return await this.api.get('/pokemon/charizard');
  }
}