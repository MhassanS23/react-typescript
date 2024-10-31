import { useRef, useState } from "react";
import Text from "../Text";
import Button from "../Button";

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
    const [count, setCount] = useState(0)
    const refNum = useRef<number>(0);

    const handleIncreament = () => {
        refNum.current++;
        setCount((prevCount) => prevCount + 1);
    }

    const handleDecreament = () => {
        refNum.current++;
        setCount((prevCount) => prevCount - 1);
    }
    
    return(
        <>
            <input type="text" onChange={handleChange} value={inputValue} ref={ref}/>
            <Text>{inputValue}</Text>

            <Text>Count: {count}</Text>
            <div className="flex flex-row gap-2">
                <Button isLoading={false} className={'bg-red-600 hover:bg-red-400'} onClick={handleIncreament}>Increament</Button>
                <Button isLoading={false} className={'bg-yellow-600 hover:bg-yellow-400'} onClick={handleDecreament}>Decreament</Button>
                {/* <Button isLoading={false} className={'bg-green-600 hover:bg-green-400'} onClick={() => dispatch({type: 'Reset'})}>Reset</Button> */}
            </div>
            <Text>Buttons {refNum.current} times clicked</Text>
        </>
    );
}