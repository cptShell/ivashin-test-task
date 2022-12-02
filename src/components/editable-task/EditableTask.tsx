import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../../common/models/Task';
import './EditableTask.scss';

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
    <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        className="edit-input"
        defaultValue={task.toJSON()}
        {...register('description')}
      />
      <button className="apply-button" />
    </form>
  );
};
