import Header from "./components/Header/header";
import TodoApp from "./components/TodoApp/todoApp";

export default function Page() {
  return (
    <div className="relative max-w-screen-md mx-auto">
      <Header classes="relative w-full bg-blue-700 text-white text-center p-8 rounded-b-xl" title="What to do now?" textStyles="font-semibold text-3xl" />
      <TodoApp />
    </div>
  );
}
