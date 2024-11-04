export type ProfileProps = {
    name: string;
}

export default function Profile ( {name}: ProfileProps) {
    return(
        <div className="text-white">
            Welcome {name} to Our Website
        </div>
    );
}