import TodoItem from "@/components/cards/TodoItem";
import { fetchTodos } from "@/lib/actions/todo.action";

export default async function Home() {
  const result = await fetchTodos();

  return (
    <main className="flex flex-col items-center justify-center p-4 mt-4">
      {result.length === 0 ? (
        <p className="no-result">No threads found</p>
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
    </main>
  );
}
