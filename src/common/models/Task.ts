import { hashtagRegex } from '../constants/constants';
import { v4 as uuidv4 } from 'uuid';

export class Task {
  data: string;
  readonly id: string;

  constructor(data: string) {
    this.data = data;
    this.id = uuidv4();
  }

  get description() {
    return this.data.replaceAll(hashtagRegex, '<b>$1</b>');
  }

  get tags() {
    return [...this.data.matchAll(hashtagRegex)].map((groups) => groups[1]);
  }

  toJSON() {
    return this.data;
  }
}
