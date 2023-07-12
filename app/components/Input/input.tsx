import React from 'react';
import './style.scss';

function Input(props:Iinput) {
    const {label, onChange, name, value, ...restProps } = props
    return (
         <div className="input-group">
            <label className="label"  htmlFor={name}>{label}</label>
            <input name={name} 
                onChange={onChange} 
                value={value} 
                type="text" 
                required
                className="input" 
                placeholder=""
                {...restProps}
                />
        </div>            
    );
}

interface Iinput extends React.InputHTMLAttributes<HTMLInputElement>{
    label:string,
}

export default Input;