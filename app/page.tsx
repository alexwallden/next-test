'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { IUser } from './models/IUser';

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));

    fetch(
      'https://api.thecatapi.com/v1/images/search?api_key=live_vXNZD2Novm6IAO6VUk98KwhT9S8obSqilstHwjvIZqZdUSFl3iQIXxba00DJWDQo&limit=30'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul className={styles.ul}>
          {users.length > 0 &&
            users.map((user, i) => <li key={i}>{user.first_name}</li>)}
        </ul>
      </div>
    </main>
  );
}
