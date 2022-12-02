import { FC, useState } from 'react';
import { Task } from '../../common/models/Task';
import { EditableTask } from '../editable-task/EditableTask';

type Props = {
  task: Task;
  editTask: (targetId: string, newData: string) => void;
  deleteTask: (targetId: string) => void;
};

export const TaskItem: FC<Props> = ({ task, editTask, deleteTask }) => {
  const { id, description } = task;
  const [isEditable, setEditable] = useState(false);

  const handleEdit = (newData: string) => {
    newData.length ? editTask(id, newData) : deleteTask(id);
    setEditable(false);
  };
  const handleDelete = () => deleteTask(id);
  const handleOpenEditMode = () => setEditable(true);

  return (
    <li>
      <div>
        {!isEditable ? (
          <>
            <span dangerouslySetInnerHTML={{ __html: description }} />
            <button onClick={handleOpenEditMode}>edit</button>
          </>
        ) : (
          <EditableTask edit={handleEdit} task={task} />
        )}
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
};
