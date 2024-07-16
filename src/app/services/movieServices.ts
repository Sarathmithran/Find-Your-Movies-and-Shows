import { APIKey, baseURL } from "./classes";

export class MovieServices {
    static getMovie = async (query: string) => {
      try {
        const response = await fetch(`${baseURL}/?apikey=${APIKey}&s=${query}`, {
          method: "GET"
        });
        const data = await response.json();
        return data.Search;
      } catch (error) {
        console.log('Something went wrong', error);
        return [];
      }
    }
  }
  