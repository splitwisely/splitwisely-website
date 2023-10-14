'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      router.push('/dashboard');
    } else {
      // Handle the error message, for example:
      console.error(data.error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label className={styles.label}>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
