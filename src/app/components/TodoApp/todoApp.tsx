import InputBox from "../InputBox/inputBox";
import List from "../List/list";

type TodoItem = {
    id: number;
    todo: string;
    color: string;
    created_at: string;
  };
const items:TodoItem[] = [{id: 1, todo: "First item", color:"green", created_at:Date()},
                          {id: 2, todo: "Second item", color:"violet", created_at:Date()},
                          {id: 3, todo: "Third item", color:"red", created_at:Date()}];



export default function TodoApp() {
    return (
        <>
            <InputBox type="text" />
            <List initItems={items} />
        </>
    );
}