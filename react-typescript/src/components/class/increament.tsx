import { Component } from "react";
import Button from "../Button";

type stateProps = {
    count: number;
}

type increamentProps = {
    message: string;
}


export class Increament extends Component<increamentProps, stateProps> {
    state = { count: 0 };

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render () {
        return (
            <div className="text-white">
                <Button onClick={this.handleClick} isLoading={false} className={'bg-red-600 hover:bg-red-400'}>Increament</Button>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}