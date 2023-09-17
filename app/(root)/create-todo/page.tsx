import TodoForm from "@/components/forms/TodoForm";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-4">
      <p className="text-gray-800 font-bold text-2xl">Create Todo</p>
      <TodoForm />
    </section>
  );
};

export default Page;
