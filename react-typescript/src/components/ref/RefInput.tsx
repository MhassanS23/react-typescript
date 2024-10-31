import { useRef, useState } from "react";
import Text from "../Text";
import Button from "../Button";

interface counterClick {
    increament: number;
    decreament: number;
    reset: number;
}

export default function RefInput () {
    // INPUT REF
    const [inputValue, setInputValue] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if (ref.current) {
            setInputValue(ref.current.value);
        }
    }

    // NUMBER REF
    const [count, setCount] = useState<number>(0)
    const refNum = useRef<counterClick>({
        increament: 0,
        decreament: 0,
        reset: 0
    });

    const handleIncreament = () => {
        refNum.current.increament++;
        setCount((prevCount) => prevCount + 1);
    }

    const handleDecreament = () => {
        refNum.current.decreament++;
        setCount((prevCount) => prevCount - 1);
    }

    const handleReset = () => {
        refNum.current.reset++;
        setCount(0);
    }
    
    return(
        <>
            <input type="text" className="mt-4" onChange={handleChange} value={inputValue} ref={ref}/>
            <Text>{inputValue}</Text>

            <Text>Count: {count}</Text>
            <div className="flex flex-row gap-2">
                <Button isLoading={false} className={'bg-red-600 hover:bg-red-400'} onClick={handleIncreament}>Increament</Button>
                <Button isLoading={false} className={'bg-yellow-600 hover:bg-yellow-400'} onClick={handleDecreament}>Decreament</Button>
                <Button isLoading={false} className={'bg-green-600 hover:bg-green-400'} onClick={handleReset}>Reset</Button>
            </div>
            <Text>Buttons increament {refNum.current.increament} times clicked</Text>
            <Text>Buttons decreament {refNum.current.decreament} times clicked</Text>
            <Text>Buttons reset {refNum.current.reset} times clicked</Text>
        </>
    );
}