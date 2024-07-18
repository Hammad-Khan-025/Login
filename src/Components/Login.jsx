import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customAlert, setCustomAlert] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !email || !password || password.length < 6) {
      setCustomAlert(true);
    } else {
      setUser({ name, email, password });
    }
  };

  return (
    <div>
      <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-purple-500 to-purple-200">
        <div className="px-5 sm:px-10 py-10 rounded-xl bg-white tracking-wider w-full sm:w-auto mx-3 sm:mx-0 shadow-xl">
          <h1 className="text-center font-bold text-2xl sm:text-4xl">Login</h1>
          <form className="pt-10 pb-3 flex flex-col">
            <input
              type="text"
              className="border-2 p-2 rounded w-full sm:w-96 focus:border-purple-500 focus:outline-none"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {customAlert && !name && <p className="text-red-500">Name is required*</p>}
            <input
              type="text"
              className="mt-8 border-2 p-2 rounded w-full sm:w-96 focus:border-purple-500 focus:outline-none"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {customAlert && !email && <p className="text-red-500">Email is required*</p>}
            <input
              type="password"
              className="mt-8 border-2 p-2 rounded w-full sm:w-96 focus:border-purple-500 focus:outline-none"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {customAlert && (!password || password.length < 6) && (
              <p className="text-red-500">
                {!password ? 'Password is required*' : 'Password must be 6 characters'}
              </p>
            )}
            <button
              onClick={handleClick}
              className="mt-8 bg-purple-500 p-2 rounded text-center text-white font-bold hover:bg-purple-400 active:bg-purple-700 focus:ring-1 focus:ring-offset-2 focus:ring-purple-500 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
