import Header from "./components/Header/header.tsx";

export default function Page() {
  return (
    <div className="relative max-w-screen-lg mx-auto">
      <Header classes="relative w-full bg-gray-500 text-center p-8" title="What to do now?" textStyles="font-semibold text-3xl" />
    </div>
  );
}
