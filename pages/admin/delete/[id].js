import Link from 'next/link';
import { server } from '../../../config';

export default function Delete() {
  const deleteHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/todos/1', {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
    alert(data.message);
  };

  return (
    <>
      <h1>Admin</h1>
      <h2>Delete Todo</h2>
      <p>Are you sure you want delete this todo</p>
      <form onSubmit={deleteHandler}>
        <button className="btn" type="submit">
          Yes
        </button>
        <Link href="/admin">
          <a className="btn-outlined">No</a>
        </Link>
      </form>
    </>
  );
}
