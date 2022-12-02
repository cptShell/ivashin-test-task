import { FC, useId } from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../../common/models/Task';

type Props = {
  addTask: (task: Task) => void;
};

type AddTaskForm = {
  description: string;
};

export const TaskInput: FC<Props> = ({ addTask }) => {
  const { handleSubmit, register, reset } = useForm<AddTaskForm>();

  const onSubmit = ({ description }: AddTaskForm) => {
    const task = new Task(description);

    addTask(task);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Type task" {...register('description')} />
      <button>add task</button>
    </form>
  );
};
