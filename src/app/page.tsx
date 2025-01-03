import Image from "next/image";
import Head from "../../node_modules/next/head";

export function Header({title, classes, textStyles=""}) {
  return (
  <div className={classes}>
    <h1 className={textStyles}>{title}</h1>
  </div>
  );
}

export default function Page() {
  return (
    <div className="relative max-w-screen-lg mx-auto">
      <Header classes="relative w-full bg-gray-500 text-center p-8" title="What to do now?" textStyles="" />
    </div>
  );
}
