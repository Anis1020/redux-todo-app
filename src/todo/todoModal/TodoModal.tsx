import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/feature/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";

const TodoModal = () => {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  //   const [priority,setPriority]=useState()
  const dispatch = useAppDispatch();
  const handleDialog = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      id: id,
      title: task,
      description,
    };
    dispatch(addTodo(taskDetails));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDialog}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="name"
                placeholder="Task Title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="username"
                placeholder="Task Details"
                className="col-span-3"
              />
            </div>
          </div>
          <PrioritySelect />
          <div className="mt-3">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
