import { useState } from 'react';
import Head from 'next/head';
import { server } from '../config';

export default function Home({ todos }) {
  const [state, setState] = useState({ title: '' });

  const changeHandler = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/todos', {
      method: 'POST',
      body: {
        title: state.title,
      },
    });
    const data = await res.json();
    console.log(data);
    alert(data.message);
  };

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className={todo.completed && 'completed'} key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(server + '/api/todos');
  const data = await res.json();
  return {
    props: {
      todos: data.todos,
    },
  };
}
