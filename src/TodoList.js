import TodoCard from "./TodoCard";
import Context from "./Context";
import { useContext } from "react";

export default function TodoList() {
  const { todos } = useContext(Context);
  return todos.map((todo) => <TodoCard key={todo.id} todo={todo} />);
}
