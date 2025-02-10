type TodoItem = {
    id: number;
    todo: string;
    color: string;
    created_at: string;
};
export default function ListItem({item} : {item : TodoItem}) {
    return (
        <li className="mx-auto my-2 px-4 py-2 w-3/4 flex justify-around rounded-xl text-lg border-black border" style={{backgroundColor : item.color}}>
            <span>{item.todo}</span>
        </li>
    );
}