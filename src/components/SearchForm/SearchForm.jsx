import React from 'react';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addTodoAction } from 'redux/todoSlice';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { FiSearch } from 'react-icons/fi';

import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useLocalStorage('search', '');

  const handleInput = ({ currentTarget }) => setValue(currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      name: value,
    };

    dispatch(addTodoAction(todo));
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={value}
        autoFocus
      />
    </SearchFormStyled>
  );
};
