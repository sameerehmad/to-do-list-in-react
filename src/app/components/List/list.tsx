'use client';
import React, {useState} from 'react'
import InputBox from '../InputBox/inputBox'
import ListItem from '../ListItem/listItem'
type TodoItem = {
    id: number;
    todo: string;
    color: string;
    created_at: string;
};

// const itemColors:string[] = ["blue", "green", "yellow", "red", "violet", "pink"];

export default function List ({initItems} : {initItems : TodoItem[]}){
    const [items] = useState(initItems);
    return (
        <div className='flex flex-col align-items-center'>
            <InputBox type="text" />
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full w-1/4 mx-auto my-2"
            >Add</button>
            <ul className="relative w-full py-8 my-2 bg-gray-200 rounded-lg">
                {items.map((item) => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}