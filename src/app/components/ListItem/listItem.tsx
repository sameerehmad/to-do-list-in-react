import { TodoItem } from '../TodoApp/todoApp';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function ListItem(
    {item, hasSubList, deleteHandler, favHandler} : 
    {item : TodoItem, hasSubList : boolean, deleteHandler : (id : number , isFav: boolean) => void, favHandler : (item : TodoItem) => void})  
    {
    
    const favTag = "fill-red-700";
    const nonFavTag = "fill-transparent hover:fill-red-400"

    const itemContent : ReactNode = hasSubList?
                        (
                        <div className="grow shrink basis-0 text-center my-1 break-all font-medium hover:text-xl hover:font-semibold transition-all">
                            <Link href={"/"+item.id}>{item.todo}</Link>
                        </div>
                        ):
                        (
                        <div className="grow shrink basis-0 text-center my-1 break-all font-medium">
                            {item.todo}
                        </div>
                        );
    return (
        <li className="mx-auto my-2 px-4 py-3 w-11/12 inline-flex gap-10 justify-center items-center rounded-xl text-lg border-black border overflow-hidden group" style={{backgroundColor : item.color}}>
            <div data-svg-wrapper className="relative">
                <svg className="w-6 h-6 stroke-2 stroke-red-700 hover:w-7 hover:h-7 transition-all" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    className={item.isFav?favTag:nonFavTag} 
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" 
                    fill="none" onClick={() => favHandler(item)}/>
                </svg>
            </div>
            {itemContent}
            
            <button
                className="bg-red-100 text-red py-2 px-6
                           rounded-full text-center
                           group-hover:opacity-90 opacity-0
                           transition-all duration-300
                           hover:opacity-100 hover:bg-red-700
                           hover:text-white hover:text-lg
                           hover:font-bold hover:px-6"
                           onClick={() => deleteHandler(item.id, item.isFav)}
            >
                Delete
            </button>
        </li>
    );
}