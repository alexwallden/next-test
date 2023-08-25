"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {users.length > 0 && users.map((user, i) => <h1 key={i}>{user.first_name}</h1>)}
      </div>
    </main>
  );
}
