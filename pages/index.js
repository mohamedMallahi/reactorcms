import Head from 'next/head';

export default function Home({ todos, err }) {
  if (err) {
    console.log(err);
    return <h1>Error</h1>;
  }
  return (
    <>
      <h1>Todos</h1>
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
  try {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return {
      props: {
        todos: data.todos,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { err },
    };
  }
}
