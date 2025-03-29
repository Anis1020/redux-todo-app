import TodoFilter from "../todoFilter/TodoFilter";
import TodoList from "../todoList/TodoList";
import TodoModal from "../todoModal/TodoModal";
import { useAppSelector } from "@/redux/hooks";
// import { Button } from "@/components/ui/button";

const TodoContainer = () => {
  const todos = useAppSelector((state) => state.todo);

  //   console.log(todos.todos);

  return (
    <div className="w-[90%] mx-auto">
      <h1>This is your todo list</h1>
      <TodoModal />
      <TodoFilter />
      <div className=" bg-amber-300 rounded-md p-3 space-y-2">
        {/* <div className="flex justify-around items-center border bg-white rounded-2xl">
          <p>#No</p>
          <div>
            <p>Priority</p>
          </div>
          <p>title</p>
          <p>description</p>
          <div className="space-x-3 ">
            <Button>Del</Button>
            <Button>Edit</Button>
          </div>
        </div> */}
        <div>
          {!todos?.todos.length && <p>There is no task left</p>}
          {todos?.todos?.map((todo, i) => (
            <TodoList key={i} {...todo}></TodoList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
