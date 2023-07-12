"use client"
import React, {useState} from 'react'
import './style.scss';



type Option ={value:number, text:string, label:string}

interface IDropDown{
    label:string,
    options?:Option[],
    pageSize:number,
    onChange:React.ChangeEventHandler<HTMLSelectElement>,
    selectedOption:number

}


const Dropdown = (props:IDropDown) => {
    const {label, options, pageSize, onChange, selectedOption} = props   
    return (
        <section className='dropdown'>
            <label htmlFor="items">{label}</label>
            <select
              value={selectedOption}
              onChange={onChange}>

          {options?.map(o => (
            <option  key={o.value} value={o.value}>
              {o.value}
          </option>
          ))}
        </select>
        </section>
        
    );
  };

export default Dropdown