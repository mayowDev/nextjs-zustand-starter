import {IJoke} from "@/jokes/type";

export interface IAuthSlice {
    user: Object,
    isLoggedin:Boolean
    signin: (email:string, password:string) => void
    // signin: (email: string, password: string) => Promise<void>;

}

export interface IJokeSlice {
    jokes: IJoke[]
    saveJoke?: (joke: IJoke) => void,
    fetchJokes: ()=>void
    isLoading?: Boolean,
    error?: unknown | null | string,
    deleteJoke?: (id: number) => void
}