type TextProps = {
    children: React.ReactNode;
}

export default function Text (props: TextProps){
    return(
        <div className="font-Poppins text-sm text-gray-400">
            {props.children}
        </div>
    );
}