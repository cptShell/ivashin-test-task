import { FC, useId } from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../../common/models/Task';
import './TaskInput.scss';

type Props = {
  addTask: (task: Task) => void;
};

type AddTaskForm = {
  description: string;
};

export const TaskInput: FC<Props> = ({ addTask }) => {
  const { handleSubmit, register, reset } = useForm<AddTaskForm>();

  const onSubmit = ({ description }: AddTaskForm) => {
    if (!description.trim().length) return;

    const task = new Task(description);

    addTask(task);

    reset();
  };

  return (
    <form className="create-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        className="create-input"
        type="text"
        placeholder="Add a new task..."
        {...register('description')}
      />
      <button className="create-button" />
    </form>
  );
};
