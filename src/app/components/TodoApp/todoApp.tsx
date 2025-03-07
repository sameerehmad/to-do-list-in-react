import Header from "../Header/header";
import List from "../List/list";

export type TodoItem = {
    id: number;
    todo: string;
    color: string;
    isFav: boolean;
    created_at: string;
  };
const items:TodoItem[] = [{id: 1, todo: "First item", color:"green", isFav:false, created_at:Date()},
                          {id: 2, todo: "Second item", color:"violet", isFav:false, created_at:Date()},
                          {id: 3, todo: "Third item", color:"orange", isFav:false, created_at:Date()}];



export default function TodoApp({title, listNo=0} : {title : string, listNo : number}) {
    return (
        <>
        <Header classes="relative w-full bg-blue-700 text-white text-center p-8 rounded-b-xl" title={title} textStyles="font-semibold text-3xl" />
        <List initItems={items} listId={listNo} />
        </>
    );
}