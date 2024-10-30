import React from "react";

type TextProps = {
    children: React.ReactNode | string | number;
}

export default function Text (props: TextProps){
    return(
        <div className="font-Poppins text-sm text-gray-400">
            {props.children}
        </div>
    );
}