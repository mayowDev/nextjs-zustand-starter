import { create, StateCreator } from 'zustand'
import Cookies from 'js-cookie'

import { persist, devtools } from 'zustand/middleware';
import {logout, login} from '../services/authService'
import { ReactNode } from 'react';

interface IAuthSlice{
    auth: boolean |ReactNode | undefined;
    user:Object | null | undefined
    login:()=>void
    logout:()=>void
//   register: (userInfo: FormData) => Promise<void>;

}

const createAuthSlice: StateCreator<IAuthSlice,[['zustand/persist', unknown], ['zustand/devtools', never]],[],IAuthSlice> = (set, get) => ({
    auth: false,
    user: null,
    // fetchUser:  () => {
    //     try {
    //     const data =  Cookies.get('isAuthenticated')
    //     console.log('data', data)
    //     set({auth:data,  user: data },false, "fetchUser")
    //     } catch (error) {
    //         console.log('error', error)
    //     // set({ error, isLoading: false },false, "fetchJokes error")
    //     }
    // },
    login:  () => {
        const data  = login();
        console.log('login data', data)
        set({auth:true, user:true}, false, 'login')
        console.log('login user')

    },
    register:  () => {
    console.log('register user')
    },
    logout: () => {
        logout()
        set({auth:false, user:false}, false, 'logout')
        console.log('logout user')
    },

})

export const useAuthStore = create<IAuthSlice>()(
    devtools(persist((...a) => ({
        ...createAuthSlice(
              // @ts-ignore
          ...a
      )
}),{name:'auth'})))

// export const useThemeStore = create(devtools(persist(createThemeSlice, {name: 'theme'})))

//The Problem: If we try to access the above store directly in the component, we'll get hydration errors if the user is logged in because it doesn't match the initial state of the store.

