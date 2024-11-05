import React, {useState} from "react";
import Heading from "./Heading";

type Navigations = 'Home' | 'Contact' | 'Whyus';

export default function Navigation () {
    const [selectedNav, setSelectedNav] = useState<Navigations>('Home');
    const navOption: Navigations[] = ['Home', 'Contact', 'Whyus'];

    return(
        <div className="flex flex-row gap-2 text-white items-center">
            <Heading>Navigation</Heading>
            <Options navOption={navOption} selectedNav={selectedNav} onClickNav={(nav) => setSelectedNav(nav)}/>
        </div>
    );
}

type navOptionsProps<T> = { 
    navOption: T[];
    selectedNav: T; 
    onClickNav: (navigation: T) => void;
}


function Options<T extends Navigations>({ navOption, selectedNav, onClickNav}: navOptionsProps<T>) {
    return(
        <div className="mt-2">
            {
                navOption.map((navigation, index) => (
                    <button 
                    key={index} 
                    className={`cursor-pointer ${selectedNav === navigation ? "font-bold" : ""}`} 
                    onClick={() => onClickNav(navigation)} >
                        {navigation}
                    </button>
                ))
            }
        </div>
    );
}
