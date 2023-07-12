import { IJoke } from "@/app/jokes/type";
export interface IForm{
    onFormSubmit:(jokeData:IJoke)=> void,
    data?:IJoke,
    handleDeleteJoke?:(id?:number)=>void,
}

