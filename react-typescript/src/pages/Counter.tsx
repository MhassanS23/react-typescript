import { useReducer } from "react";
import Button from "../components/Button";
import Text from "../components/Text";

const initialState = { count: 0 }

interface countType {
    count: number;
}

type payloadType = {
    type: 'Increament' | 'Decreament';
    payload: number;
}

type resetType = {
    type: 'Reset';
}

type actionType = resetType | payloadType;

const reduceCounter = (state: countType, action: actionType) => {
    switch(action.type){
        case 'Increament':
            return {count: state.count + action.payload}
        case 'Decreament': 
            return {count: state.count - action.payload}
        case 'Reset':
            return initialState;
        default:
        return state;    
    }

}

export default function Counter () {
    const [state, dispatch] = useReducer(reduceCounter, initialState);
    return(
        <div className="flex flex-col gap-2 mt-2">
            <Text>Count: {state.count}</Text>
            <div className="flex flex-row gap-2">
                <Button isLoading={false} className={'bg-red-600 hover:bg-red-400'} onClick={() => dispatch({type: 'Increament', payload: 1})}>Increament</Button>
                <Button isLoading={false} className={'bg-yellow-600 hover:bg-yellow-400'} onClick={() => dispatch({type: 'Decreament', payload: 1})}>Decreament</Button>
                <Button isLoading={false} className={'bg-green-600 hover:bg-green-400'} onClick={() => dispatch({type: 'Reset'})}>Reset</Button>
            </div>
        </div>
    );
}