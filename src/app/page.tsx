import TodoApp from "./components/TodoApp/todoApp";

export default function Page() {
  return (  
    <div className="relative max-w-screen-md mx-auto">
      <TodoApp title="What to do now?"/>
    </div>
  );
}
