import { FC, useState } from 'react';
import { Task } from '../../common/models/Task';
import { EditableTask } from '../editable-task/EditableTask';
import './TaskItem.scss';

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
    <li className="task-item">
      {!isEditable ? (
        <div className="description-container">
          <span
            className="task-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <button className="edit-button" onClick={handleOpenEditMode} />
        </div>
      ) : (
        <EditableTask edit={handleEdit} task={task} />
      )}
      <button className="delete-button" onClick={handleDelete} />
    </li>
  );
};
