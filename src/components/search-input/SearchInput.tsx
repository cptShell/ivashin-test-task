import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './SearchInput.scss';

type SearchTaskForm = {
  tagQuery: string;
};

type Props = {
  updateTags: (tagQuery: string) => void;
};

export const SearchInput: FC<Props> = ({ updateTags }) => {
  const { handleSubmit, register } = useForm<SearchTaskForm>();

  const onSubmit = ({ tagQuery }: SearchTaskForm) => {
    updateTags(tagQuery.trim());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        className="search-input"
        type="text"
        placeholder="Add one or multiple tags..."
        {...register('tagQuery')}
      />
      <button className="search-button" />
    </form>
  );
};
