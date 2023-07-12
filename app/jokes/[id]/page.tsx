'use client'
import React,{ useMemo} from 'react';
import Form from '../../components/Form/Form'  
import { IParam, IJoke } from '../type';
import {useJokeStore}  from "@/store/useJokeStore"

   
export default function page(param:IParam) {

    const {params}=param
    const {isLoading,jokes, saveJoke, deleteJoke} = useJokeStore()
    // const saveJoke = useJokeStore(store=>store.saveJoke)
    // const  = useJokeStore(store=>store.deleteJoke)
    // const joke = useMemo(()=>jokes.find((item:IJoke)=>item.id == params.id), [jokes, params.id]) ;
    const joke:any = jokes.find((item:IJoke)=>item.id == params.id) ;
    console.log('isLoading', isLoading)
    if(!joke) return <h1 className='form-title'>404 - Item not found</h1>
    
    let formData ={
      id: joke?.id,
      body:joke?.body,
      title:  joke?.title,
      views: joke?.views,
      author:joke?.author,
      createdAt:Date.now().toString()
    }

    const handleSubmit =  (jokeData:IJoke)=>{
       saveJoke(jokeData)
    }

    const handleDeleteJoke =  ()=> {
        deleteJoke(params.id)
    }

    return (<>
        <h2 className='form-title'>Edit Joke</h2>
        <Form onFormSubmit={handleSubmit} data={formData} handleDeleteJoke={handleDeleteJoke}/>
        

    </>
  );
}