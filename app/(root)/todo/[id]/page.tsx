import TodoItem from "@/components/cards/TodoItem";
import { fetchTodoById } from "@/lib/actions/todo.action";

const Page = async ({ params }: { params: { id: string } }) => {
  const result = await fetchTodoById(params.id);

  return (
    <section>
      <TodoItem
        id={result._id.toString()}
        title={result.title}
        description={result.description}
        createdAt={result.createdAt}
      />
    </section>
  );
};

export default Page;
