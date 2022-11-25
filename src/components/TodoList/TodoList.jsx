import { useSelector } from 'react-redux';
import { todosSelector } from 'redux/todoSlice';

import { Grid, GridItem, Todo, Text } from 'components';

const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <>
      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
      {!todos.length && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
    </>
  );
};

export default TodoList;
