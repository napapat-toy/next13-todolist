import TodoItem from "@/components/cards/TodoItem";
import { fetchTodos } from "@/lib/actions/todo.action";

export default async function Home() {
  const result = await fetchTodos();

  return (
    <section className="flex flex-col items-center justify-center p-4">
      {result.length === 0 ? (
        <p className="no-result">No todos found</p>
      ) : (
        <>
          {result.map((todo) => (
            <TodoItem
              key={todo._id}
              id={todo._id.toString()}
              title={todo.title}
              description={todo.description}
              createdAt={todo.createdAt}
            />
          ))}
        </>
      )}
    </section>
  );
}
