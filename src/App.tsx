import { useState } from 'react';
import { TaskItem } from './components/task-item/TaskItem';
import { Task } from './common/models/Task';
import { TaskStorage } from './common/helpers/TaskStorage';
import { TaskInput } from './components/task-input/TaskInput';
import { SearchInput } from './components/search-input/SearchInput';
import './reset.scss';
import './App.scss';

function App() {
  const [tasks, setTasks] = useState<Array<Task>>(
    TaskStorage.loadState() || []
  );
  const [searchTags, setSearchTags] = useState<Array<string>>([]);

  const addTask = (task: Task) => {
    setTasks((tasks) => {
      const nextState = [...tasks, task];
      TaskStorage.saveState(nextState);

      return nextState;
    });
  };
  const updateTags = (tagQuery: string) => {
    const tags = tagQuery.length ? tagQuery.split(' ') : [];
    setSearchTags(tags);
  };
  const editTask = (targetId: string, newData: string) => {
    setTasks((tasks) => {
      const targetTask = tasks.find((task) => task.id === targetId);

      if (!targetTask) return tasks;

      targetTask.data = newData;
      TaskStorage.saveState(tasks);

      return [...tasks];
    });
  };
  const deleteTask = (targetId: string) => {
    setTasks((tasks) => {
      const filteredTasks = tasks.filter((task) => task.id !== targetId);

      TaskStorage.saveState(filteredTasks);

      return filteredTasks;
    });
  };

  let filteredTasks: Array<Task> = [];

  if (searchTags.length) {
    filteredTasks = tasks.filter((task) => {
      return searchTags.some((searchTag) => {
        return task.tags.find((tag) => {
          return tag.toLowerCase() === searchTag.toLowerCase();
        });
      });
    });
  } else {
    filteredTasks = tasks;
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <TaskInput addTask={addTask} />
        <SearchInput updateTags={updateTags} />
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
