'use client'
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import Input from '../Input/input'
import Button from '../Button/Button'
import { IForm } from './type';
import { IJoke } from '@/jokes/type';
 import './style.scss'

 function Form(props:IForm) {
    const {onFormSubmit, data, handleDeleteJoke} = props
    const router = useRouter()
    const [jokeData,setJoke] = useState<IJoke>(
        data?data:
        {body:'',title: '', views:'',  author:"",  createdAt:Date.now() }
        );
    const handleInputChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setJoke({
            ...jokeData,
            [e.currentTarget.name]:e.currentTarget.value
        });
    }

    const handleFormSubmit =  (e:React.FormEvent)=>{
        e.preventDefault()
        onFormSubmit(jokeData)
        router.push('/')
    }
    const handleDelete =  ()=>{
        handleDeleteJoke?.(jokeData.id);
        router.push('/')
    }

    

    return (
        <form method='post' className='form'>
            <Input name="title" label="Title" onChange={handleInputChange} value={jokeData.title}/>
             <Input name="author" label="Author" onChange={handleInputChange} value={jokeData.author}/>
             <Input name="views" label="Views" onChange={handleInputChange} value={jokeData.views}/>
             <section className='button-container'>
             <Button
                onClick={handleFormSubmit}
                className='save-button'
                text='Save Joke'
             />
             {data&&
             <Button onClick={handleDelete} text='Delete' className='delete-button'/>
             
             }
             </section>
        </form>
    );
}

export default Form;