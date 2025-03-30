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
import { FormEvent, useState } from "react";
import { usePostTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

const TodoModal = () => {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState("");
  // console.log(object);
  const [addTodo, { isLoading, isError, isSuccess }] = usePostTodoMutation();
  // console.log(isLoading, isError, isSuccess);

  const handleDialog = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      title: task,
      description,
      isCompleted: false,
      priority,
    };
    // dispatch(addTodo());
    addTodo(taskDetails);
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
          {/* priority */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              priority
            </Label>
            <div className="col-span-3">
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* <PrioritySelect /> */}
          <div className="mt-3 flex justify-end">
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
