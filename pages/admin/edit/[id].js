// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { server } from '../../../config';

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Admin</h1>
      <h2>Edit Todo</h2>
      <p>{id}</p>
    </>
  );
}
