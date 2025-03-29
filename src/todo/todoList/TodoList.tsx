import { Button } from "@/components/ui/button";
import { removeTodo, toggleStatus } from "@/redux/feature/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
type TTodoListProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
const TodoList = ({ title, description, id, isCompleted }: TTodoListProps) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleStatus(id));
  };
  return (
    <div className="flex justify-around items-center border bg-white rounded-2xl">
      <input onChange={handleToggle} type="checkbox" />
      <div className="flex items-center">
        <h1 className="bg-red-500"></h1>
        <p>Priority</p>
      </div>
      <p>{isCompleted ? "Done" : "pending"}</p>
      <p>{title}</p>
      <p>{description}</p>
      <div className="space-x-3 ">
        <Button onClick={() => dispatch(removeTodo(id))}>Del</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default TodoList;
