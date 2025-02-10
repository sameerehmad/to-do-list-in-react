import Header from "./components/Header/header";
import List from "./components/List/list";

type TodoItem = {
  id: number;
  todo: string;
  color: string;
  created_at: string;
};

let items:TodoItem[] = [{id: 1, todo: "First item", color:"green", created_at:Date()},
                        {id: 2, todo: "Second item", color:"violet", created_at:Date()},
                        {id: 3, todo: "Third item", color:"red", created_at:Date()}];

export default function Page() {
  return (
    <div className="relative max-w-screen-md mx-auto">
      <Header classes="relative w-full bg-blue-700 text-white text-center p-8 rounded-b-xl" title="What to do now?" textStyles="font-semibold text-3xl" />
      <List items={items} />
    </div>
  );
}
