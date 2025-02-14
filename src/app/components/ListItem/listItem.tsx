import React, { MouseEventHandler } from "react";

type TodoItem = {
    id: number;
    todo: string;
    color: string;
    created_at: string;
};
export default function ListItem({item, deleteHandler} : {item : TodoItem, deleteHandler : MouseEventHandler}) {
    return (
        <li className="mx-auto my-2 px-4 py-2 w-11/12 flex align-items-center rounded-xl text-lg border-black border group" style={{backgroundColor : item.color}}>
            <span className="flex flex-grow align-middle justify-center my-1 break-all flex-wrap h-8 ">{item.todo}</span>
            
            <button
                className="bg-red-100 text-red py-1 
                           rounded-full w-1/6 mr-1 my-1
                           h-12
                           group-hover:opacity-80 opacity-0
                           transition-all duration-300
                           hover:opacity-100 hover:bg-red-600
                           hover:text-white hover:scale-110
                           hover:font-bold"
            >
                Delete
            </button>
        </li>
    );
}