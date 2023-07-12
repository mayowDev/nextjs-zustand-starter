import { create, StateCreator } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import {getJokes, saveJoke, deleteJoke} from '@/services/jokeService'
import { IJoke } from "@/jokes/type";

import { IJokeSlice} from "./types";

const INITIAL_STATE = {
    jokes: [],
    isLoading: false,
    error: null,
}

 const createJokeSlice: StateCreator<IJokeSlice,[['zustand/persist', unknown], ['zustand/devtools', never]],[],IJokeSlice> = (set, get) => ({
    jokes: INITIAL_STATE.jokes,
    isLoading:INITIAL_STATE.isLoading,
    error:INITIAL_STATE.error,
    fetchJokes: async () => {
        try {
        set({ isLoading: true, error: null },false, "loading")
        const {data} = await getJokes()
        let lastElement = data[data.length - 1];
        // set((state) => ({isLoading: false, jokes: lastElement }), false, "fetchJokes")
        set({ isLoading: false, jokes: lastElement },false, "fetchJokes")
        } catch (error) {
        set({ error, isLoading: false },false, "fetchJokes error")
        }
    },
    saveJoke: async (joke:IJoke) => {
        try {
            set({ isLoading: true, error: null })
            const jokes = get().jokes
            const jokeItem = jokes.find((item) => item.id === joke.id)
            // joke already exists, update its details
            if (jokeItem) {
                const updatedJokes = jokes.map((item) =>item.id == joke.id ? { ...joke } : item)
                set({ jokes: updatedJokes, isLoading: false,},false, "updateJoke")
            } else {
                // set((store)=>({jokes:[...store.jokes, joke], isLoading: false}))
                const newJokes = [...jokes, joke ]
                set({ jokes: newJokes, isLoading: false}, false, "save new Joke")

            }
            await saveJoke(joke)
        } catch (error) {
            set({ error, isLoading: false })
        }
        
    },
    deleteJoke: async (id)=>{
        try {
            const jokes = get().jokes
            const jokeItem = jokes.find((item) => item.id == id)
            if (jokeItem) {
                set((store)=>({jokes: store.jokes.filter((item) =>item.id !== id ),  isLoading: false }), false, "deletJoke")
                // set({ jokes: filteredJokes, isLoading:false })
            } 
            await deleteJoke(id)
            
        } catch (error) {
            set({ error, isLoading: false })
        }
        

    }
})

export const useJokeStore = create<IJokeSlice>()(
    devtools(persist((...a) => ({
        ...createJokeSlice(
              // @ts-ignore
          ...a
      )
}),{name:'jokes'})))