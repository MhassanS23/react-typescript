import Login from "./Login";
import { ProfileProps } from "./Profile";

type privateProps = {
    isLogedIn: boolean;
    Component: React.ComponentType<ProfileProps>;
}


export const Private = ({isLogedIn, Component}: privateProps) => {
    if (isLogedIn) {
        return <Component name="Maulana"/>
    }else{
        return <Login/>
    }
}