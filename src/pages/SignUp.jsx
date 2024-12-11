import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    // Validation
    if (!email || !password || !confirmPassword) {
      return alert('Please fill out all fields.');
    }

    if (password !== confirmPassword) {
      return alert('Passwords do not match.');
    }

    const newUser = {
      id: Date.now(),
      email,
      password,
    };

    // Save to localStorage
    const existingUsers =
      JSON.parse(localStorage.getItem('userAccounts')) || [];
    existingUsers.push(newUser);
    localStorage.setItem('userAccounts', JSON.stringify(existingUsers));

    console.log("Sign-Up Successful:", newUser);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    alert('Sign-Up Successful! Your details have been saved.');
    navigate('/signin');
  };

  return (
    <main className="my-4">
      <form
        className="max-w-72 min-h-[80vh] mx-auto flex flex-col items-center gap-4"
        onSubmit={handleSignUp}
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xl">
              Email <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xl">
              Password <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xl">
              Confirm Password <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button
          className="btn w-full bg-orange-500 text-white hover:bg-orange-600"
          type="submit"
        >
          Sign Up
        </button>
        <p>
  <span className="italic">Already registered?</span>{' '}
  <Link to="/signin" className="text-blue-500">
    <span className="hover:underline">Sign In</span>
  </Link>
</p>
      </form>
    </main>
  );
};


export default SignUp;
