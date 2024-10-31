import { useRef, useState, useEffect } from "react";
import Text from "../Text";
import Button from "../Button";


export default function RefToogle () {
    const [toogle, setToogle] = useState<Boolean>(false);
    const [time, setTime] = useState<number>(0);

    const ref = useRef<NodeJS.Timeout | null>(null)

    const startTime = () => {
        setToogle(!toogle);
    }

    const resetTime = () => {
        setToogle(false);
        setTime(0);
    }

    useEffect(() => {
        ref.current = setInterval(() => {
            if (toogle) {
                setTime((seconds) => seconds + 1);
            }
        }, 1000);

        return () => {
            if (ref.current) {
                clearInterval(ref.current);
            }
        };
    },[toogle])
    
    return(
        <>
            <Text>Time Toogle: {time}</Text>
            <div className="flex flex-row gap-2">
                <Button isLoading={false} className={'bg-red-600 hover:bg-red-400'} onClick={startTime}>{toogle ? 'stop' : 'start'}</Button>
                <Button isLoading={false} className={'bg-green-600 hover:bg-green-400'} onClick={resetTime}>Reset</Button>
            </div>
        </>
    );
}