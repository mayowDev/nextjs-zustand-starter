'use client';
import React from 'react';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import {useZustandStore} from '@/hooks/useZustand'
import {useAuthStore}  from "@/store/useAuthStore"

import Button from '../components/Button/Button';

export default  function page() {
    const router = useRouter()
    //this login function is automatically called when we visit the page because useZustandstore is using useffect
    // const login = useZustandStore(useAuthStore, (state) => state.login)
    const {login} = useAuthStore()


    const handleLogin =  ()=>{
        login?.()
        router.replace('/')
    }
   
    return (
        <>
        <h2 className='form-title'>Login </h2>
        <section className='button-container'>
             <Button onClick={handleLogin} text={'Login'} className="save-button"/>
        </section>
        </>
           
    );
}
