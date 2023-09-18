"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const path = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-400 sticky top-0 left-0">
      <Link href={`/`}>
        <h1 className="font-medium text-4xl ml-4 text-white cursor-pointer">
          Todolist App
        </h1>
      </Link>
      {path === "/" ? (
        <Link href={`/create-todo`}>
          <h1 className="font-medium text-2xl text-white hover:text-gray-500 cursor-pointer">
            Create
          </h1>
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
};

export default TopBar;
