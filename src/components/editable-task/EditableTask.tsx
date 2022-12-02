import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../../common/models/Task';

type Props = {
  edit: (newData: string) => void;
  task: Task;
};

type EditForm = {
  description: string;
};

export const EditableTask: FC<Props> = ({ edit, task }) => {
  const { handleSubmit, register } = useForm<EditForm>();

  const onSubmit = ({ description }: EditForm) => {
    edit(description);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea defaultValue={task.toJSON()} {...register('description')} />
      <button>apply</button>
    </form>
  );
};
