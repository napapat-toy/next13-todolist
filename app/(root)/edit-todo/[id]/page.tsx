import TodoForm from "@/components/forms/TodoForm";
import { fetchTodoById } from "@/lib/actions/todo.action";

const Page = async ({ params }: { params: { id: string } }) => {
  const result = await fetchTodoById(params.id);

  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-4">
      <TodoForm
        id={result._id.toString()}
        title={result.title}
        description={result.description}
      />
    </section>
  );
};

export default Page;
