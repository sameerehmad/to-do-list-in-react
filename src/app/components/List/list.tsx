'use client';
import { randomInt } from 'crypto';
import React, {useState} from 'react'
import InputBox from '../InputBox/inputBox'
import ListItem from '../ListItem/listItem'
type TodoItem = {
    id: number;
    todo: string;
    color: string;
    created_at: string;
};

const itemColors:string[] = ["blue", "green", "yellow", "red", "violet", "pink"];
const getRandomInRange = (min : number, max : number) => Math.floor(Math.random() * (max - min)) + min;

export default function List ({initItems} : {initItems : TodoItem[]}){
    const [items, setItems] = useState(initItems);
    const [input, setInput] = useState("");

    function addItem() {
        if (input.trim() === "") {return alert("Please type something important");}

        let item : TodoItem = {
            id: items.length + 1,
            todo: input,
            color: itemColors[getRandomInRange(0,6)],
            created_at: Date()
        };

        setItems([item ,...items]);
        setInput("");
    }

    return (
        <div className='flex flex-col align-items-center'>
            <InputBox 
                type="text"
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full w-1/4 mx-auto my-2"
                onClick={addItem}
            >
                Add
            </button>
            <ul className="relative w-full py-8 my-2 bg-gray-200 rounded-lg">
                {items.map((item) => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}