"use client";

import { addTodolist, updateTodoById } from "@/lib/actions/todo.action";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  title: string;
  description?: string;
}

interface Params {
  id: string;
  title: string;
  description: string;
}

const TodoForm = ({ id, title, description }: Params) => {
  const [formData, setFormData] = useState<Props>({
    title: title || "",
    description: description || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (id) {
      await updateTodoById(id, formData);
    } else {
      await addTodolist(formData);
    }

    setIsSubmitting(false);
    router.push(`/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border border-black rounded-md gap-4 p-4 bg-gray-200"
    >
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="title" className="text-xl capitalize">
          Title:{" "}
        </label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.title}
          required
          className="p-2 text-lg rounded-lg outline-none"
        />
        <label htmlFor="description" className="text-xl capitalize">
          Description:{" "}
        </label>
        <textarea
          id="description"
          rows={4}
          name="description"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.description}
          className="resize-none text-lg p-2 rounded-lg outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isSubmitting
              ? "bg-slate-700 cursor-not-allowed text-white"
              : "bg-slate-400 hover:bg-slate-500 hover:text-white cursor-pointer"
          } flex justify-center w-full mt-2 p-2 rounded-md`}
        >
          <p className="font-medium text-lg">{`${id ? "Edit" : "Create"}`}</p>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
