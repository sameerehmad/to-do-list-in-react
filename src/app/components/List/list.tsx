'use client';
import React, {useState} from 'react'
import InputBox from '../InputBox/inputBox'
import ListItem from '../ListItem/listItem'
import { TodoItem } from '../TodoApp/todoApp';

const itemColors:string[] = ["blue", "green", "yellow", "orange", "violet", "pink"];
const getRandomInRange = (min : number, max : number) => Math.floor(Math.random() * (max - min)) + min;

export default function List ({initItems} : {initItems : TodoItem[]}){
    const [favs, setFavs] = useState<TodoItem[]>([]);
    const [items, setItems] = useState<TodoItem[]>(initItems);
    const [input, setInput] = useState("");

    const lastId = React.useRef(3);

    function addToList(item : TodoItem) {
        if(item.isFav) {
            setFavs([item, ...favs]);
        }
        else {
            setItems([item, ...items]);
        }
    }

    function addItem() {
        if (input.trim() === "") {return alert("Please type something important");}

        const item : TodoItem = {
            id: (lastId.current += 1),
            todo: input,
            color: itemColors[getRandomInRange(0,6)],
            isFav: false,
            created_at: Date()
        };

        addToList(item);
        setInput("");
    }

    function deleteItem(id : number, isFav : boolean) {
        if(!isFav) {
            setItems(items.filter((item) => item.id !== id));
        }
        else {
            setFavs(favs.filter((fav) => fav.id !== id));
        }
    }

    function addHandler(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addItem();
    }

    function toggleFav(item : TodoItem) {
        deleteItem(item.id, item.isFav);
        item.isFav = !item.isFav;
        addToList(item);
    }

    return (
        <div className='flex flex-col align-items-center'>
            <form onSubmit={addHandler} className="flex flex-col align-items">
                <InputBox 
                    type="text"
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-full w-1/4 mx-auto my-2"
                    type="submit"
                >
                Add
                </button>
            </form>
            <ul className="w-full py-8 my-2 bg-gray-200 rounded-lg flex justify-center flex-col">
                {favs.map((fav) => (
                    <ListItem key={fav.id} item={fav} deleteHandler={deleteItem} favHandler={toggleFav} />
                ))}
                {items.map((item) => (
                    <ListItem key={item.id} item={item} deleteHandler={deleteItem} favHandler={toggleFav} />
                ))}
            </ul>
        </div>
    );
}