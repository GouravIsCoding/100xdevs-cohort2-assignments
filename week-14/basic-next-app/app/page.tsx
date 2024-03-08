import Image from "next/image";

export default function Home() {
  return (
    <div className="text-left bg-white rounded-xl p-5">
      <h1 className="font-sans font-bold text-2xl my-4">
        Welcome to Home page!
      </h1>
      <p className="">
        🧑🏻‍💻Interactive: Interactive client-side rendering in action.
        <br />
        🚀Static: Optimized server-side rendered static content for SEO.
      </p>
    </div>
  );
}
