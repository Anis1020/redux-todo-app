import { Button } from "@/components/ui/button";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";

type TTodoListProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoList = ({
  title,
  description,
  _id,
  isCompleted,
  priority,
}: TTodoListProps) => {
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
  };
  const [updateTodo, { isSuccess }] = useUpdateTodoMutation();
  const handleToggle = () => {
    //todo
    const options = {
      _id,
      data: {
        title,
        isCompleted: !isCompleted,
      },
    };
    console.log("select clicked");
    updateTodo(options);
  };
  return (
    <div className="flex justify-around items-center border bg-white rounded-2xl">
      <input
        onChange={handleToggle}
        defaultChecked={isCompleted}
        type="checkbox"
        className="mx-2"
      />
      <div className="flex items-center flex-1 gap-2">
        <h1
          className={`${
            priority === "High"
              ? "bg-red-500"
              : priority === "Medium"
              ? "bg-amber-300"
              : "bg-pink-300"
          }  w-2 h-2 rounded-full`}
        ></h1>
        <p>{priority}</p>
      </div>
      <p className="flex-1">{isCompleted ? "Done" : "pending"}</p>
      <p className="flex-1">{title}</p>
      <p className="flex-3">{description}</p>
      <div className="space-x-3 ">
        <Button onClick={() => handleDeleteTodo(_id)}>Del</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default TodoList;
