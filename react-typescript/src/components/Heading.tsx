type HeadingProps = {
    children: string
}

export default function Heading (props: HeadingProps){
    return(
        <div className="font-Roboto text-2xl font-bold text-yellow-400">
            {props.children}
        </div>
    );
}