import Text from "../Text";

type itemProps = {
    id: number;
    name: string;
    club: string;
}

type listProps<T> = {
    items: T[];
    onClick: (value: T) => void;
}

export const List = <T extends itemProps>({items, onClick}: listProps<T>) => {
    return(
        <div className="text-white flex flex-row gap-2 mt-2">
            <Text>List of Items</Text>
            {
                items.map((item, index) => {
                    return(
                        <div key={item.id} onClick={() => onClick(item)}>{item.name} {item.club}</div>
                    );
                })
            }
        </div>
    );
}