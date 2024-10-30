import React from "react";

type ButtonProps = {
    children: string;
    className?: string;
    isLoading: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button ({children, className = '', isLoading, type = 'button', onClick}: ButtonProps){
    return(
        <button type={type} onClick={onClick} disabled={isLoading} className={`${className} font-Roboto text-md w-full text-white px-20 py-2 rounded-md text-center`}>
            {children}
        </button>
    );
}