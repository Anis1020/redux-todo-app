import { useGetPokemonByNameQuery } from "@/redux/api/api";
import TodoFilter from "../todoFilter/TodoFilter";
import TodoList from "../todoList/TodoList";
import TodoModal from "../todoModal/TodoModal";
import { useState } from "react";

const TodoContainer = () => {
  // const todos = useAppSelector((state) => state.todo);
  const [priority, setPriority] = useState();
  // console.log(priority);
  const { data: todos, isLoading } = useGetPokemonByNameQuery(priority);
  // console.log(todos?.data);
  if (isLoading) {
    <h2>Loading......</h2>;
  }
  return (
    <div className="w-[90%] mx-auto">
      <h1>This is your todo list</h1>
      <TodoModal />
      <TodoFilter priority={priority} setPriority={setPriority} />
      <div className=" bg-amber-300 rounded-md p-3 ">
        <div className="space-y-2">
          {!todos?.data.length && <p>There is no task left</p>}
          {todos?.data?.map((todo, i) => (
            <TodoList key={i} {...todo}></TodoList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
