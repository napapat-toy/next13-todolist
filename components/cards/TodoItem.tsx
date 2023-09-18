"use client";

import Link from "next/link";
import Button from "../shared/Button";
import { useParams, useRouter } from "next/navigation";
import { deleteTodoById } from "@/lib/actions/todo.action";

interface Props {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

const TodoItem = ({ id, title, description, createdAt }: Props) => {
  const router = useRouter();
  const params = useParams();

  const handleDelete = async (id: string) => {
    await deleteTodoById(id);
    router.push(`/`);
  };

  return (
    <section className="flex flex-col w-full md:min-w-[560px] border border-black rounded-md p-4 my-4 mx-2 bg-gray-200">
      {params?.id ? (
        <>
          <p
            className={`text-gray-800 font-bold text-2xl capitalize text-ellipsis ${
              title?.split(" ").every((value) => value.length < 30)
                ? "break-words"
                : " break-all"
            }`}
          >
            {title}
          </p>
          <p
            className={`text-gray-500 font-semibold text-lg ${
              description?.split(" ").every((value) => value.length < 42)
                ? "break-words"
                : " break-all"
            }`}
          >
            {description}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-600 text-sm">{createdAt.toString()}</p>
            <div className="flex gap-2">
              <Button
                type="button"
                title="Edit"
                onClickBtn={() => router.push(`/edit-todo/${id}`)}
              />
              <Button
                type="button"
                title="Delete"
                onClickBtn={() => handleDelete(params.id.toString())}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href={`/todo/${id}`}>
            <p
              className={`text-gray-800 font-bold text-2xl capitalize hover:underline text-ellipsis ${
                title?.split(" ").every((value) => value.length < 30)
                  ? "break-words"
                  : " break-all"
              }`}
            >
              {title}
            </p>
          </Link>
          <p
            className={`text-gray-500 font-semibold text-lg ${
              description?.split(" ").every((value) => value.length < 42)
                ? "break-words"
                : " break-all"
            }`}
          >
            {description}
          </p>
        </>
      )}
    </section>
  );
};

export default TodoItem;
