import  {create, StateCreator } from 'zustand'
import { devtools } from "zustand/middleware"

interface BearSlice {
  bears: number
  addBear: () => void
}
const createBearSlice: StateCreator<
    BearSlice,   
    [['zustand/persist', unknown], ['zustand/devtools', never]], [], BearSlice
    > = (set, get, api) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 }), false, "addBear"),
})


// If you have some middlewares then replace 
//StateCreator<MySlice, [], []> with StateCreator<MySlice, Mutators, []>.
//Eg. if you're using devtools then it'll be StateCreator<MySlice, [["zustand/devtools", never]], []>.
//Eg. if you're using persist — ["zustand/persist", YourPersistedState]
