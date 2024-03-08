import React from "react";
import Link from "next/link";

export default function Nav() {
  const navLinkArr = [
    { link: "/", name: "Home" },
    { link: "/staticpage", name: "Static" },
    { link: "/interactivepage", name: "Interactive" },
  ];
  return (
    <>
      <nav className="bg-purple-500 py-4 text-center">
        {navLinkArr.map((item, index) => (
          <Link
            key={index}
            className={`bg-white px-3 py-2 rounded-2xl mx-2`}
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
