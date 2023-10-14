'use client';

import { useState } from 'react';
import styles from './styles.module.css';

const SignUp = () => {
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

    // Here you might send formData to your API
    // But for now, let's just log it

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
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
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
