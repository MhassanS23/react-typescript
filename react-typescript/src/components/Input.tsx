import React from "react";

type InputProps = {
    value: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
}

export default function Input ({value, className = '', onChange}: InputProps){
    return(
        <input value={value} type="text" onChange={onChange} className={`${className} font-Roboto text-md px-5 py-2 rounded-md`}/>
    );
}