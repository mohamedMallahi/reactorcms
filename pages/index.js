import { useState } from 'react';
import Head from 'next/head';
import { useForm } from '../hooks';
import { server } from '../config';

export default function Home({ todos }) {
  const [values, changeHandler] = useState({ title: '', body: '' });

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
        <div className="mb-3">
          <label for="title">Title</label>
          <input
            value={values.title}
            id="title"
            name="title"
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label for="body">Body</label>
          <textarea
            value={values.body}
            id="body"
            name="body"
            onChange={changeHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
      <ul className="list-group">
        {posts.map((post) => (
          <div key={post.id} className=" card card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
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
