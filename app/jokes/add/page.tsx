'use client';
import React from 'react';
import {useJokeStore}  from "@/store/useJokeStore"

import Form from '../../components/Form/Form'
import { IJoke } from '../type';

export default  function page() {
    const saveJoke = useJokeStore(store=>store.saveJoke)
    const handleSubmit =  (jokeData:IJoke)=>{
        const result =  saveJoke(jokeData)
        console.log('addResult', result)
        return result
    }
    return (
        <>
        <h2 className='form-title'>Add new Joke</h2>
         <Form onFormSubmit={handleSubmit} />
        </>
           
    );
}



