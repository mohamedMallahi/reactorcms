import { useState } from 'react';
import Link from 'next/link';
import { server } from '../../config';

export default function Delete() {
  return (
    <>
      <h1>Admin</h1>
      <h2>Delete Todo</h2>
      <p>Are you sure you want delete this todo</p>
      <form>
        <button>Yes</button>
        <button>No</button>
      </form>
    </>
  );
}
