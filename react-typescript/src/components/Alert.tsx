import { useEffect } from "react";

type AlertType = 'Success' | 'Failed' | 'Warning';
type AlertProps = {
    text: string;
    type?: AlertType; 
    className?: string;
    visibleAlert: boolean;
    handleVisibleAlert: () => void;
}

export default function Alert ({text, type = 'Success', className, visibleAlert, handleVisibleAlert}: AlertProps){
    const types: Record<AlertType, string> = {
        Success : 'bg-green-500',
        Failed : 'bg-red-500',
        Warning : 'bg-yellow-500'
    }

    useEffect(() => {
        if(visibleAlert){
            const timer = setTimeout(() => {
                handleVisibleAlert();
            }, 1750);
            return clearTimeout(timer);
        }
    },[visibleAlert, handleVisibleAlert])

    return(
        <>
            {visibleAlert && (
                <div className={`${className} ${types[type]} font-Poppins font-medium text-md text-white px-20 py-2 rounded-md text-center z-1 absolute w-max bottom-10 left-[50%] translate-x-[-50%]`}>
                    {text}
                </div>
            )}
        </>
    );
}