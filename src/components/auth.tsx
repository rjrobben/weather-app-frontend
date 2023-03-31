import React, { useState } from 'react';

type SignUpProps = {
  onSignUp: (email: string, password: string) => void;
};

export const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSignUp(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
      <input className="border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type='submit'>
        Sign Up
        </button>
    </form>

  );
};

type LoginProps = {
  onLogin: (email: string, password: string) => void;
};

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
      <input className="border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type='submit'>
        Log In
        </button>
    </form>
  );
};
