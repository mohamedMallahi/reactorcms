// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { server } from '../../../config';

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Post</h1>
      <p>{id}</p>
    </>
  );
}
