import { Component } from 'react';

import { Container, Header, SearchForm, Section } from 'components';
import TodoList from 'components/TodoList/TodoList';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Section>
          <Container>
            <SearchForm />
            <TodoList />
          </Container>
        </Section>
      </>
    );
  }
}
