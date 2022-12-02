import { StorageKey } from '../constants/storageKey';
import { Task } from '../models/Task';

export class TaskStorage {
  static saveState(tasks: Array<Task>): void {
    localStorage.setItem(StorageKey.TODOLIST_SAVE_STATE, JSON.stringify(tasks));
  }

  static loadState(): Array<Task> | null {
    const state = localStorage.getItem(StorageKey.TODOLIST_SAVE_STATE);

    if (!state) return null;

    try {
      const dataList = JSON.parse(state) as Array<string>;
      const tasks: Array<Task> = dataList.map((data) => new Task(data));

      return tasks;
    } catch {
      return null;
    }
  }
}
