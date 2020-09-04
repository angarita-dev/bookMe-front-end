import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Reusable components
import SubmitButton from './SubmitButton';

export default function SignUp() {
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
  const [passwordConfirmation, passwordConfirmationInput] = useInput({ type: 'password' });

  const onSubmit = () => {
    console.log(`email: ${email}, password: ${password}, passwordConfirmation: ${passwordConfirmation}`);
  };

  return (
    <div className="sign-in">
      <h1>Sign Up</h1>
      <div className="display-container">
        <h2>Email</h2>
        {emailInput}
        <h2>Password</h2>
        {passwordInput}
        <h2>Password confirmation</h2>
        {passwordConfirmationInput}
        <SubmitButton handleSubmit={onSubmit} />
        <div className="link-container">
          <p>
            Already have an account?
            {' '}
            <NavLink to="/sign-in">Sign In</NavLink>
            {' '}
            instead.
          </p>
        </div>
      </div>
    </div>
  );
}
