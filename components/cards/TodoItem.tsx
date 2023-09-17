"use client";

import Link from "next/link";
import Button from "../shared/Button";
import { useParams } from "next/navigation";

interface Props {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

const TodoItem = ({ id, title, description, createdAt }: Props) => {
  const params = useParams();

  const handleEdit = (id: string) => {
    console.log(`edit:${id}`);
  };
  const handleDelete = (id: string) => {
    console.log(`delete:${id}`);
  };

  return (
    <section className="md:min-w-[560px] border border-black rounded-md p-4 mt-4 bg-gray-200">
      {params?.id ? (
        <>
          <p className="text-gray-800 font-bold text-2xl capitalize">{title}</p>
          <p className="text-gray-500 font-semibold text-lg text-ellipsis">
            {description}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-600 text-sm">{createdAt.toString()}</p>
            <div className="flex gap-2">
              <Button
                type="button"
                title="Edit"
                onClickBtn={() => handleEdit(params.id.toString())}
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
            <p className="text-gray-800 font-bold text-2xl capitalize">
              {title}
            </p>
          </Link>
          <p className="text-gray-500 font-semibold text-lg text-ellipsis">
            {description}
          </p>
        </>
      )}
    </section>
  );
};

export default TodoItem;
