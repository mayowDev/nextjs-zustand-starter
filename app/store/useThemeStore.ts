import { create, StateCreator } from 'zustand'
import { persist, devtools } from 'zustand/middleware';

interface IThemeSlice{
    theme:string,
    setTheme:()=>void
}
const createThemeSlice: StateCreator<IThemeSlice,[['zustand/persist', unknown], ['zustand/devtools', never]],[],IThemeSlice> = (set, get) => ({
    theme: "dark",
    setTheme: () => {
        set({theme: get().theme === "dark" ? "light" : "dark"}, false, 'setThem')
    }

})

export const useThemeStore = create<IThemeSlice>()(
    devtools(persist((...a) => ({
        ...createThemeSlice(
              // @ts-ignore
          ...a
      )
}),{name:'theme'})))

// export const useThemeStore = create(devtools(persist(createThemeSlice, {name: 'theme'})))

