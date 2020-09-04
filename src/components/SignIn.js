import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Reusable components
import SubmitButton from './SubmitButton';

export default function SignIn() {
  const useInput = ({ type }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };

  const [email, emailInput] = useInput({ type: 'email' });
  const [password, passwordInput] = useInput({ type: 'password' });

  const onSubmit = () => {
    console.log(`email: ${email}, password: ${password}`);
  };

  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      <div className="display-container">
        <h2>Email</h2>
        {emailInput}
        <h2>Password</h2>
        {passwordInput}
        <SubmitButton handleSubmit={onSubmit} />
        <div className="link-container">
          <p>
            Don&apos;t have an account?
            <NavLink to="/sign-up">Sign Up</NavLink>
            {' '}
            instead.
          </p>
        </div>
      </div>
    </div>
  );
}
