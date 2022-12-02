import { FC } from 'react';
import { useForm } from 'react-hook-form';

type SearchTaskForm = {
  tagQuery: string;
};

type Props = {
  updateTags: (tagQuery: string) => void;
};

export const SearchInput: FC<Props> = ({ updateTags }) => {
  const { handleSubmit, register } = useForm<SearchTaskForm>();

  const onSubmit = ({ tagQuery }: SearchTaskForm) => {
    updateTags(tagQuery);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Type tag" {...register('tagQuery')} />
      <button>search</button>
    </form>
  );
};
