import React, { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";

export default function Box () {
    const theme = useContext(ThemeContext);
    return(
        <div className="flex flex-col gap-2 mt-2">
            Box
        </div>
    );
}