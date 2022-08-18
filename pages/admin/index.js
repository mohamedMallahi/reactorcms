import { useState } from 'react';
import Head from 'next/head';
import { server } from '../../config';

export default function Admin({ todos }) {
  return (
    <>
      <h1>Admin</h1>
      <h2>All Todos</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr className={todo.completed && 'completed'} key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.id}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
