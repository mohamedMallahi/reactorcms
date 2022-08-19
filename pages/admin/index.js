import { useState } from 'react';
import Link from 'next/link';
import { server } from '../../config';

export default function Admin({ posts }) {
  return (
    <>
      <h1>Admin</h1>
      <h2>All posts</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr className={post.completed && 'completed'} key={post.id}>
              <td>{post.title}</td>
              <td>{post.id}</td>
              <td>
                <Link href={`/admin/edit/${post.id}`}>
                  <a className="btn">Edit</a>
                </Link>
                <Link href={`/admin/delete/${post.id}`}>
                  <a className="btn-outlined">Delete</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(server + '/api/posts');
  const data = await res.json();
  return {
    props: {
      posts: data.posts,
    },
  };
}
