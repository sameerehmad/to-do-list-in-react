'use client';
import React, {useState} from 'react'
import ListItem from '../ListItem/listItem'
type TodoItem = {
    id: number;
    todo: string;
    color: string;
    created_at: string;
};

// const itemColors:string[] = ["blue", "green", "yellow", "red", "violet", "pink"];

export default function List ({initItems} : {initItems : TodoItem[]}){
    const [items, setItems] = useState(initItems);
    return (
    <ul className="relative w-full py-8 my-2 bg-gray-200 rounded-lg">
        {items.map((item) => (
            <ListItem key={item.id} item={item} />
        ))}
    </ul>
    );
}